## Usage

Send in stdout from imagemagicks identify -verbose

```
  var exec = require('child_process').exec
  var filepath = "/path/to/file"
  var identifyParser = require("identify-verbose-parser")

  exec(`identify -verbose ${filepath}`, function(err, res) {
    if(err) throw err;

    var data = identifyParser(res)
    console.log(data)
  })
```

Returns a parsed result :)
