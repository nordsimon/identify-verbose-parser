var orientations = {
    '1': 'TopLeft'
  , '2': 'TopRight'
  , '3': 'BottomRight'
  , '4': 'BottomLeft'
  , '5': 'LeftTop'
  , '6': 'RightTop'
  , '7': 'RightBottom'
  , '8': 'LeftBottom'
}

var helper = {}

helper.Geometry = function Geometry (o, val) {
  // We only want the size of the first frame.
  // Each frame is separated by a space.
  var split = val.split(" ").shift().split("x");
  var width = parseInt(split[0], 10);
  var height = parseInt(split[1], 10);
  if (o.size && o.size.width && o.size.height) {
    if (width > o.size.width) o.size.width = width;
    if (height > o.size.height) o.size.height = height;
  } else {
    o.size = {
      width:  width,
      height: height
    }
  }
};

helper.Format = function Format (o, val) {
  o.format = val.split(" ")[0];
};

helper.Depth = function Depth (o, val) {
  o.depth = parseInt(val, 10);
};

helper.Colors = function Colors (o, val) {
  o.color = parseInt(val, 10);
};

helper.Orientation = function Orientation (o, val) {
  if (val in orientations) {
    o['Profile-EXIF'] || (o['Profile-EXIF'] = {});
    o['Profile-EXIF'].Orientation = val;
    o.Orientation = orientations[val];
  } else {
    o.Orientation = val || 'Unknown';
  }
};

function parse (stdout) {
  // normalize
  var parts = (stdout||"").trim().replace(/\r\n|\r/g, "\n").split("\n");

  // skip the first line (its just the filename)
  parts.shift();

  try {
    var len = parts.length
      , rgx1 = /^( *)(.+?): (.*)$/ // key: val
      , rgx2 = /^( *)(.+?):$/      // key: begin nested object
      , out = { indent: {} }
      , level = null
      , lastkey
      , i = 0
      , res
      , o
      , inHistogram = false

    for (; i < len; ++i) {
      res = rgx1.exec(parts[i]) || rgx2.exec(parts[i]);
      if (!res) continue;

      var indent = res[1].length
        , key = res[2] ? res[2].trim() : '';

      if ('Image' == key || 'Warning' == key) continue;

      if(inHistogram && indent === 2)
        inHistogram = false

      if(key === "Histogram")
        inHistogram = true

      if(inHistogram) indent = 3

      var val = res[3] ? res[3].trim() : null;

      // first iteration?
      if (null === level) {
        level = indent;
        o = out.root = out.indent[level] = {};
      } else if (indent < level) {
        // outdent
        if (!(indent in out.indent)) {
          continue;
        }
        o = out.indent[indent];
      } else if (indent > level) {
        // dropping into a nested object
        out.indent[level] = o;
        // wierd format, key/val pair with nested children. discard the val
        o = o[lastkey] = {};
      }

      level = indent;

      if (val) {
        o[key] = val;

        if (key in helper) {
          helper[key](o, val);
        }
      }

      lastkey = key;
    }

  } catch (err) {
    err.message = err.message + "\n\n  Identify stdout:\n  " + stdout;
    return err;
  }

  return o
}

module.exports = parse
