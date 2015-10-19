var identifyVerboseParser = require('../index')
var data = `
Image: 3aa85319-240a-421d-b433-ccb310c079ab.jpg
  Format: JPEG (Joint Photographic Experts Group JFIF format)
  Mime type: image/jpeg
  Class: DirectClass
  Geometry: 4096x4096+0+0
  Resolution: 711x711
  Print size: 5.7609x5.7609
  Units: PixelsPerInch
  Type: Grayscale
  Base type: Grayscale
  Endianess: Undefined
  Colorspace: Gray
  Depth: 8-bit
  Channel depth:
    gray: 8-bit
  Channel statistics:
    Pixels: 16777216
    Gray:
      min: 20 (0.0784314)
      max: 35 (0.137255)
      mean: 27.6516 (0.108438)
      standard deviation: 0.835452 (0.00327628)
      kurtosis: 0.602756
      skewness: -0.0103483
      entropy: 0.445341
  Colors: 16
  Histogram:
         1: ( 20, 20, 20) #141414 gray(20)
         9: ( 21, 21, 21) #151515 gray(21)
       143: ( 22, 22, 22) #161616 gray(22)
       859: ( 23, 23, 23) #171717 gray(23)
      7469: ( 24, 24, 24) #181818 gray(24)
     84186: ( 25, 25, 25) #191919 gray(25)
   1029427: ( 26, 26, 26) #1A1A1A gray(26)
   5869166: ( 27, 27, 27) #1B1B1B gray(27)
   7639772: ( 28, 28, 28) #1C1C1C gray(28)
   1938644: ( 29, 29, 29) #1D1D1D gray(29)
    192506: ( 30, 30, 30) #1E1E1E gray(30)
     13498: ( 31, 31, 31) #1F1F1F gray(31)
      1466: ( 32, 32, 32) #202020 gray(32)
        58: ( 33, 33, 33) #212121 gray(33)
        10: ( 34, 34, 34) #222222 gray(34)
         2: ( 35, 35, 35) #232323 gray(35)
  Rendering intent: Perceptual
  Gamma: 0.454545
  Chromaticity:
    red primary: (0.64,0.33)
    green primary: (0.3,0.6)
    blue primary: (0.15,0.06)
    white point: (0.3127,0.329)
  Background color: gray(255)
  Border color: gray(223)
  Matte color: gray(189)
  Transparent color: gray(0)
  Interlace: None
  Intensity: Undefined
  Compose: Over
  Page geometry: 4096x4096+0+0
  Dispose: Undefined
  Iterations: 0
  Compression: JPEG
  Quality: 100
  Orientation: Undefined
  Properties:
    date:create: 2015-10-19T15:33:56+02:00
    date:modify: 2015-10-19T11:39:46+02:00
    jpeg:colorspace: 2
    jpeg:sampling-factor: 2x2,1x1,1x1
    signature: 7856fc2d8bab11fd16534a5cc94df311ff86663da9ac850a308b4e987b46fa0f
  Artifacts:
    filename: 3aa85319-240a-421d-b433-ccb310c079ab.jpg
    verbose: true
  Tainted: False
  Filesize: 1.328MB
  Number pixels: 16.78M
  Pixels per second: 372.83GB
  User time: 0.000u
  Elapsed time: 0:01.000
  Version: ImageMagick 6.9.1-1 Q16 x86_64 2015-10-08 http://www.imagemagick.org
`

var identifyData = identifyVerboseParser(data)
