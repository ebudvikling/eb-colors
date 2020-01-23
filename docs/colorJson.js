var html = `<h1>color</h1><div class="flex">
    <div class="example">
    <div class="example-visual">
    <div class="bg--bordeaux">
      bg--bordeaux
    </div>
    <div class="color--bordeaux">
      color--bordeaux
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--bordeaux: #8a0c36;<br/>&nbsp;&nbsp;--fgcolor--bordeaux: #fff<br />
    }<br />
    .bg--bordeaux { <br />
      &nbsp;&nbsp;background: var(--color--bordeaux);<br/>&nbsp;&nbsp;color: var(--fgcolor--bordeaux) <br/>
    }<br />
    .color--bordeaux { <br/>
      &nbsp;&nbsp;color: var(--color--bordeaux) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--red">
      bg--red
    </div>
    <div class="color--red">
      color--red
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--red: #bd1118;<br/>&nbsp;&nbsp;--fgcolor--red: #fff<br />
    }<br />
    .bg--red { <br />
      &nbsp;&nbsp;background: var(--color--red);<br/>&nbsp;&nbsp;color: var(--fgcolor--red) <br/>
    }<br />
    .color--red { <br/>
      &nbsp;&nbsp;color: var(--color--red) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--reddark">
      bg--reddark
    </div>
    <div class="color--reddark">
      color--reddark
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--reddark: #900;<br/>&nbsp;&nbsp;--fgcolor--reddark: #fff<br />
    }<br />
    .bg--reddark { <br />
      &nbsp;&nbsp;background: var(--color--reddark);<br/>&nbsp;&nbsp;color: var(--fgcolor--reddark) <br/>
    }<br />
    .color--reddark { <br/>
      &nbsp;&nbsp;color: var(--color--reddark) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--rose">
      bg--rose
    </div>
    <div class="color--rose">
      color--rose
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--rose: #dc7095;<br/>&nbsp;&nbsp;--fgcolor--rose: #fff<br />
    }<br />
    .bg--rose { <br />
      &nbsp;&nbsp;background: var(--color--rose);<br/>&nbsp;&nbsp;color: var(--fgcolor--rose) <br/>
    }<br />
    .color--rose { <br/>
      &nbsp;&nbsp;color: var(--color--rose) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--orange">
      bg--orange
    </div>
    <div class="color--orange">
      color--orange
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--orange: #e5ad02;<br/>&nbsp;&nbsp;--fgcolor--orange: #fff<br />
    }<br />
    .bg--orange { <br />
      &nbsp;&nbsp;background: var(--color--orange);<br/>&nbsp;&nbsp;color: var(--fgcolor--orange) <br/>
    }<br />
    .color--orange { <br/>
      &nbsp;&nbsp;color: var(--color--orange) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--orangedark">
      bg--orangedark
    </div>
    <div class="color--orangedark">
      color--orangedark
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--orangedark: #e38121;<br/>&nbsp;&nbsp;--fgcolor--orangedark: #fff<br />
    }<br />
    .bg--orangedark { <br />
      &nbsp;&nbsp;background: var(--color--orangedark);<br/>&nbsp;&nbsp;color: var(--fgcolor--orangedark) <br/>
    }<br />
    .color--orangedark { <br/>
      &nbsp;&nbsp;color: var(--color--orangedark) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--sand">
      bg--sand
    </div>
    <div class="color--sand">
      color--sand
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--sand: #cec4a6;<br/>&nbsp;&nbsp;--fgcolor--sand: #fff<br />
    }<br />
    .bg--sand { <br />
      &nbsp;&nbsp;background: var(--color--sand);<br/>&nbsp;&nbsp;color: var(--fgcolor--sand) <br/>
    }<br />
    .color--sand { <br/>
      &nbsp;&nbsp;color: var(--color--sand) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--yellow">
      bg--yellow
    </div>
    <div class="color--yellow">
      color--yellow
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--yellow: #fae500;<br/>&nbsp;&nbsp;--fgcolor--yellow: #fff<br />
    }<br />
    .bg--yellow { <br />
      &nbsp;&nbsp;background: var(--color--yellow);<br/>&nbsp;&nbsp;color: var(--fgcolor--yellow) <br/>
    }<br />
    .color--yellow { <br/>
      &nbsp;&nbsp;color: var(--color--yellow) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--yellowlight">
      bg--yellowlight
    </div>
    <div class="color--yellowlight">
      color--yellowlight
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--yellowlight: #ff0;<br/>&nbsp;&nbsp;--fgcolor--yellowlight: #000<br />
    }<br />
    .bg--yellowlight { <br />
      &nbsp;&nbsp;background: var(--color--yellowlight);<br/>&nbsp;&nbsp;color: var(--fgcolor--yellowlight) <br/>
    }<br />
    .color--yellowlight { <br/>
      &nbsp;&nbsp;color: var(--color--yellowlight) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--green">
      bg--green
    </div>
    <div class="color--green">
      color--green
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--green: #32a237;<br/>&nbsp;&nbsp;--fgcolor--green: #fff<br />
    }<br />
    .bg--green { <br />
      &nbsp;&nbsp;background: var(--color--green);<br/>&nbsp;&nbsp;color: var(--fgcolor--green) <br/>
    }<br />
    .color--green { <br/>
      &nbsp;&nbsp;color: var(--color--green) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--greendark">
      bg--greendark
    </div>
    <div class="color--greendark">
      color--greendark
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--greendark: #2f7820;<br/>&nbsp;&nbsp;--fgcolor--greendark: #fff<br />
    }<br />
    .bg--greendark { <br />
      &nbsp;&nbsp;background: var(--color--greendark);<br/>&nbsp;&nbsp;color: var(--fgcolor--greendark) <br/>
    }<br />
    .color--greendark { <br/>
      &nbsp;&nbsp;color: var(--color--greendark) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--greenlight">
      bg--greenlight
    </div>
    <div class="color--greenlight">
      color--greenlight
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--greenlight: #93b923;<br/>&nbsp;&nbsp;--fgcolor--greenlight: #fff<br />
    }<br />
    .bg--greenlight { <br />
      &nbsp;&nbsp;background: var(--color--greenlight);<br/>&nbsp;&nbsp;color: var(--fgcolor--greenlight) <br/>
    }<br />
    .color--greenlight { <br/>
      &nbsp;&nbsp;color: var(--color--greenlight) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--lime">
      bg--lime
    </div>
    <div class="color--lime">
      color--lime
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--lime: #cbfe33;<br/>&nbsp;&nbsp;--fgcolor--lime: #000<br />
    }<br />
    .bg--lime { <br />
      &nbsp;&nbsp;background: var(--color--lime);<br/>&nbsp;&nbsp;color: var(--fgcolor--lime) <br/>
    }<br />
    .color--lime { <br/>
      &nbsp;&nbsp;color: var(--color--lime) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--blue">
      bg--blue
    </div>
    <div class="color--blue">
      color--blue
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--blue: #31769b;<br/>&nbsp;&nbsp;--fgcolor--blue: #fff<br />
    }<br />
    .bg--blue { <br />
      &nbsp;&nbsp;background: var(--color--blue);<br/>&nbsp;&nbsp;color: var(--fgcolor--blue) <br/>
    }<br />
    .color--blue { <br/>
      &nbsp;&nbsp;color: var(--color--blue) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--bluedark">
      bg--bluedark
    </div>
    <div class="color--bluedark">
      color--bluedark
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--bluedark: #12507b;<br/>&nbsp;&nbsp;--fgcolor--bluedark: #fff<br />
    }<br />
    .bg--bluedark { <br />
      &nbsp;&nbsp;background: var(--color--bluedark);<br/>&nbsp;&nbsp;color: var(--fgcolor--bluedark) <br/>
    }<br />
    .color--bluedark { <br/>
      &nbsp;&nbsp;color: var(--color--bluedark) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--bluelight">
      bg--bluelight
    </div>
    <div class="color--bluelight">
      color--bluelight
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--bluelight: #4fa8df;<br/>&nbsp;&nbsp;--fgcolor--bluelight: #fff<br />
    }<br />
    .bg--bluelight { <br />
      &nbsp;&nbsp;background: var(--color--bluelight);<br/>&nbsp;&nbsp;color: var(--fgcolor--bluelight) <br/>
    }<br />
    .color--bluelight { <br/>
      &nbsp;&nbsp;color: var(--color--bluelight) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--purpledark">
      bg--purpledark
    </div>
    <div class="color--purpledark">
      color--purpledark
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--purpledark: #650188;<br/>&nbsp;&nbsp;--fgcolor--purpledark: #fff<br />
    }<br />
    .bg--purpledark { <br />
      &nbsp;&nbsp;background: var(--color--purpledark);<br/>&nbsp;&nbsp;color: var(--fgcolor--purpledark) <br/>
    }<br />
    .color--purpledark { <br/>
      &nbsp;&nbsp;color: var(--color--purpledark) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--sea">
      bg--sea
    </div>
    <div class="color--sea">
      color--sea
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--sea: #84a8c4;<br/>&nbsp;&nbsp;--fgcolor--sea: #fff<br />
    }<br />
    .bg--sea { <br />
      &nbsp;&nbsp;background: var(--color--sea);<br/>&nbsp;&nbsp;color: var(--fgcolor--sea) <br/>
    }<br />
    .color--sea { <br/>
      &nbsp;&nbsp;color: var(--color--sea) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--black">
      bg--black
    </div>
    <div class="color--black">
      color--black
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--black: #000;<br/>&nbsp;&nbsp;--fgcolor--black: #fff<br />
    }<br />
    .bg--black { <br />
      &nbsp;&nbsp;background: var(--color--black);<br/>&nbsp;&nbsp;color: var(--fgcolor--black) <br/>
    }<br />
    .color--black { <br/>
      &nbsp;&nbsp;color: var(--color--black) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--graa1">
      bg--graa1
    </div>
    <div class="color--graa1">
      color--graa1
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--graa1: #3c3c3c;<br/>&nbsp;&nbsp;--fgcolor--graa1: #fff<br />
    }<br />
    .bg--graa1 { <br />
      &nbsp;&nbsp;background: var(--color--graa1);<br/>&nbsp;&nbsp;color: var(--fgcolor--graa1) <br/>
    }<br />
    .color--graa1 { <br/>
      &nbsp;&nbsp;color: var(--color--graa1) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--graa2">
      bg--graa2
    </div>
    <div class="color--graa2">
      color--graa2
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--graa2: #484848;<br/>&nbsp;&nbsp;--fgcolor--graa2: #fff<br />
    }<br />
    .bg--graa2 { <br />
      &nbsp;&nbsp;background: var(--color--graa2);<br/>&nbsp;&nbsp;color: var(--fgcolor--graa2) <br/>
    }<br />
    .color--graa2 { <br/>
      &nbsp;&nbsp;color: var(--color--graa2) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--graa3">
      bg--graa3
    </div>
    <div class="color--graa3">
      color--graa3
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--graa3: #999;<br/>&nbsp;&nbsp;--fgcolor--graa3: #fff<br />
    }<br />
    .bg--graa3 { <br />
      &nbsp;&nbsp;background: var(--color--graa3);<br/>&nbsp;&nbsp;color: var(--fgcolor--graa3) <br/>
    }<br />
    .color--graa3 { <br/>
      &nbsp;&nbsp;color: var(--color--graa3) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--graa4">
      bg--graa4
    </div>
    <div class="color--graa4">
      color--graa4
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--graa4: #c8c8c8;<br/>&nbsp;&nbsp;--fgcolor--graa4: #000<br />
    }<br />
    .bg--graa4 { <br />
      &nbsp;&nbsp;background: var(--color--graa4);<br/>&nbsp;&nbsp;color: var(--fgcolor--graa4) <br/>
    }<br />
    .color--graa4 { <br/>
      &nbsp;&nbsp;color: var(--color--graa4) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--graa5">
      bg--graa5
    </div>
    <div class="color--graa5">
      color--graa5
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--graa5: #ddd;<br/>&nbsp;&nbsp;--fgcolor--graa5: #000<br />
    }<br />
    .bg--graa5 { <br />
      &nbsp;&nbsp;background: var(--color--graa5);<br/>&nbsp;&nbsp;color: var(--fgcolor--graa5) <br/>
    }<br />
    .color--graa5 { <br/>
      &nbsp;&nbsp;color: var(--color--graa5) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--graa6">
      bg--graa6
    </div>
    <div class="color--graa6">
      color--graa6
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--graa6: #e5e5e5;<br/>&nbsp;&nbsp;--fgcolor--graa6: #000<br />
    }<br />
    .bg--graa6 { <br />
      &nbsp;&nbsp;background: var(--color--graa6);<br/>&nbsp;&nbsp;color: var(--fgcolor--graa6) <br/>
    }<br />
    .color--graa6 { <br/>
      &nbsp;&nbsp;color: var(--color--graa6) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--graa7">
      bg--graa7
    </div>
    <div class="color--graa7">
      color--graa7
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--graa7: #efefef;<br/>&nbsp;&nbsp;--fgcolor--graa7: #000<br />
    }<br />
    .bg--graa7 { <br />
      &nbsp;&nbsp;background: var(--color--graa7);<br/>&nbsp;&nbsp;color: var(--fgcolor--graa7) <br/>
    }<br />
    .color--graa7 { <br/>
      &nbsp;&nbsp;color: var(--color--graa7) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--white">
      bg--white
    </div>
    <div class="color--white">
      color--white
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--white: #fff;<br/>&nbsp;&nbsp;--fgcolor--white: #000<br />
    }<br />
    .bg--white { <br />
      &nbsp;&nbsp;background: var(--color--white);<br/>&nbsp;&nbsp;color: var(--fgcolor--white) <br/>
    }<br />
    .color--white { <br/>
      &nbsp;&nbsp;color: var(--color--white) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--pastel-darkgreen">
      bg--pastel-darkgreen
    </div>
    <div class="color--pastel-darkgreen">
      color--pastel-darkgreen
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--pastel-darkgreen: #91a34f;<br/>&nbsp;&nbsp;--fgcolor--pastel-darkgreen: #fff<br />
    }<br />
    .bg--pastel-darkgreen { <br />
      &nbsp;&nbsp;background: var(--color--pastel-darkgreen);<br/>&nbsp;&nbsp;color: var(--fgcolor--pastel-darkgreen) <br/>
    }<br />
    .color--pastel-darkgreen { <br/>
      &nbsp;&nbsp;color: var(--color--pastel-darkgreen) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--pastel-darkred">
      bg--pastel-darkred
    </div>
    <div class="color--pastel-darkred">
      color--pastel-darkred
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--pastel-darkred: #954839;<br/>&nbsp;&nbsp;--fgcolor--pastel-darkred: #fff<br />
    }<br />
    .bg--pastel-darkred { <br />
      &nbsp;&nbsp;background: var(--color--pastel-darkred);<br/>&nbsp;&nbsp;color: var(--fgcolor--pastel-darkred) <br/>
    }<br />
    .color--pastel-darkred { <br/>
      &nbsp;&nbsp;color: var(--color--pastel-darkred) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--pastel-green">
      bg--pastel-green
    </div>
    <div class="color--pastel-green">
      color--pastel-green
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--pastel-green: #9fc29c;<br/>&nbsp;&nbsp;--fgcolor--pastel-green: #fff<br />
    }<br />
    .bg--pastel-green { <br />
      &nbsp;&nbsp;background: var(--color--pastel-green);<br/>&nbsp;&nbsp;color: var(--fgcolor--pastel-green) <br/>
    }<br />
    .color--pastel-green { <br/>
      &nbsp;&nbsp;color: var(--color--pastel-green) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--pastel-lightred">
      bg--pastel-lightred
    </div>
    <div class="color--pastel-lightred">
      color--pastel-lightred
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--pastel-lightred: #d67e9b;<br/>&nbsp;&nbsp;--fgcolor--pastel-lightred: #fff<br />
    }<br />
    .bg--pastel-lightred { <br />
      &nbsp;&nbsp;background: var(--color--pastel-lightred);<br/>&nbsp;&nbsp;color: var(--fgcolor--pastel-lightred) <br/>
    }<br />
    .color--pastel-lightred { <br/>
      &nbsp;&nbsp;color: var(--color--pastel-lightred) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--pastel-red">
      bg--pastel-red
    </div>
    <div class="color--pastel-red">
      color--pastel-red
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--pastel-red: #db5040;<br/>&nbsp;&nbsp;--fgcolor--pastel-red: #fff<br />
    }<br />
    .bg--pastel-red { <br />
      &nbsp;&nbsp;background: var(--color--pastel-red);<br/>&nbsp;&nbsp;color: var(--fgcolor--pastel-red) <br/>
    }<br />
    .color--pastel-red { <br/>
      &nbsp;&nbsp;color: var(--color--pastel-red) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--pastel-yellow">
      bg--pastel-yellow
    </div>
    <div class="color--pastel-yellow">
      color--pastel-yellow
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--pastel-yellow: #d4c564;<br/>&nbsp;&nbsp;--fgcolor--pastel-yellow: #fff<br />
    }<br />
    .bg--pastel-yellow { <br />
      &nbsp;&nbsp;background: var(--color--pastel-yellow);<br/>&nbsp;&nbsp;color: var(--fgcolor--pastel-yellow) <br/>
    }<br />
    .color--pastel-yellow { <br/>
      &nbsp;&nbsp;color: var(--color--pastel-yellow) <br/>
    }
    </code>
    </div>
    </div><h1>named</h1><div class="flex">
    <div class="example">
    <div class="example-visual">
    <div class="bg--breaking">
      bg--breaking
    </div>
    <div class="color--breaking">
      color--breaking
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--breaking: var(--color--yellowlight);<br/>&nbsp;&nbsp;--fgcolor--breaking: var(--color--black)<br />
    }<br />
    .bg--breaking { <br />
      &nbsp;&nbsp;background: var(--color--breaking);<br/>&nbsp;&nbsp;color: var(--fgcolor--breaking) <br/>
    }<br />
    .color--breaking { <br/>
      &nbsp;&nbsp;color: var(--color--breaking) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--bruger">
      bg--bruger
    </div>
    <div class="color--bruger">
      color--bruger
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--bruger: var(--color--bluelight);<br/>&nbsp;&nbsp;--fgcolor--bruger: var(--color--white)<br />
    }<br />
    .bg--bruger { <br />
      &nbsp;&nbsp;background: var(--color--bruger);<br/>&nbsp;&nbsp;color: var(--fgcolor--bruger) <br/>
    }<br />
    .color--bruger { <br/>
      &nbsp;&nbsp;color: var(--color--bruger) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--eb">
      bg--eb
    </div>
    <div class="color--eb">
      color--eb
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--eb: var(--color--red);<br/>&nbsp;&nbsp;--fgcolor--eb: var(--color--white)<br />
    }<br />
    .bg--eb { <br />
      &nbsp;&nbsp;background: var(--color--eb);<br/>&nbsp;&nbsp;color: var(--fgcolor--eb) <br/>
    }<br />
    .color--eb { <br/>
      &nbsp;&nbsp;color: var(--color--eb) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--eb2">
      bg--eb2
    </div>
    <div class="color--eb2">
      color--eb2
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--eb2: var(--color--reddark);<br/>&nbsp;&nbsp;--fgcolor--eb2: var(--color--white)<br />
    }<br />
    .bg--eb2 { <br />
      &nbsp;&nbsp;background: var(--color--eb2);<br/>&nbsp;&nbsp;color: var(--fgcolor--eb2) <br/>
    }<br />
    .color--eb2 { <br/>
      &nbsp;&nbsp;color: var(--color--eb2) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--live">
      bg--live
    </div>
    <div class="color--live">
      color--live
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--live: var(--color--black);<br/>&nbsp;&nbsp;--fgcolor--live: var(--color--white)<br />
    }<br />
    .bg--live { <br />
      &nbsp;&nbsp;background: var(--color--live);<br/>&nbsp;&nbsp;color: var(--fgcolor--live) <br/>
    }<br />
    .color--live { <br/>
      &nbsp;&nbsp;color: var(--color--live) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--native">
      bg--native
    </div>
    <div class="color--native">
      color--native
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--native: var(--color--sand);<br/>&nbsp;&nbsp;--fgcolor--native: var(--color--white)<br />
    }<br />
    .bg--native { <br />
      &nbsp;&nbsp;background: var(--color--native);<br/>&nbsp;&nbsp;color: var(--fgcolor--native) <br/>
    }<br />
    .color--native { <br/>
      &nbsp;&nbsp;color: var(--color--native) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--native2">
      bg--native2
    </div>
    <div class="color--native2">
      color--native2
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--native2: var(--color--sea);<br/>&nbsp;&nbsp;--fgcolor--native2: var(--color--white)<br />
    }<br />
    .bg--native2 { <br />
      &nbsp;&nbsp;background: var(--color--native2);<br/>&nbsp;&nbsp;color: var(--fgcolor--native2) <br/>
    }<br />
    .color--native2 { <br/>
      &nbsp;&nbsp;color: var(--color--native2) <br/>
    }
    </code>
    </div>
    </div><h1>socialmedia</h1><div class="flex">
    <div class="example">
    <div class="example-visual">
    <div class="bg--facebook">
      bg--facebook
    </div>
    <div class="color--facebook">
      color--facebook
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--facebook: var(--color--blue);<br/>&nbsp;&nbsp;--fgcolor--facebook: var(--color--white)<br />
    }<br />
    .bg--facebook { <br />
      &nbsp;&nbsp;background: var(--color--facebook);<br/>&nbsp;&nbsp;color: var(--fgcolor--facebook) <br/>
    }<br />
    .color--facebook { <br/>
      &nbsp;&nbsp;color: var(--color--facebook) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--twitter">
      bg--twitter
    </div>
    <div class="color--twitter">
      color--twitter
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--twitter: var(--color--bluelight);<br/>&nbsp;&nbsp;--fgcolor--twitter: var(--color--white)<br />
    }<br />
    .bg--twitter { <br />
      &nbsp;&nbsp;background: var(--color--twitter);<br/>&nbsp;&nbsp;color: var(--fgcolor--twitter) <br/>
    }<br />
    .color--twitter { <br/>
      &nbsp;&nbsp;color: var(--color--twitter) <br/>
    }
    </code>
    </div>
    </div><h1>themed</h1><div class="flex">
    <div class="example">
    <div class="example-visual">
    <div class="bg--alert">
      bg--alert
    </div>
    <div class="color--alert">
      color--alert
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--alert: var(--color--red);<br/>&nbsp;&nbsp;--fgcolor--alert: var(--fgcolor--red)<br />
    }<br />
    .bg--alert { <br />
      &nbsp;&nbsp;background: var(--color--alert);<br/>&nbsp;&nbsp;color: var(--fgcolor--alert) <br/>
    }<br />
    .color--alert { <br/>
      &nbsp;&nbsp;color: var(--color--alert) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--background">
      bg--background
    </div>
    <div class="color--background">
      color--background
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--background: var(--color--white);<br/>&nbsp;&nbsp;--fgcolor--background: var(--fgcolor--white)<br />
    }<br />
    .bg--background { <br />
      &nbsp;&nbsp;background: var(--color--background);<br/>&nbsp;&nbsp;color: var(--fgcolor--background) <br/>
    }<br />
    .color--background { <br/>
      &nbsp;&nbsp;color: var(--color--background) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--error">
      bg--error
    </div>
    <div class="color--error">
      color--error
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--error: var(--color--red);<br/>&nbsp;&nbsp;--fgcolor--error: var(--fgcolor--red)<br />
    }<br />
    .bg--error { <br />
      &nbsp;&nbsp;background: var(--color--error);<br/>&nbsp;&nbsp;color: var(--fgcolor--error) <br/>
    }<br />
    .color--error { <br/>
      &nbsp;&nbsp;color: var(--color--error) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--focus">
      bg--focus
    </div>
    <div class="color--focus">
      color--focus
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--focus: var(--color--blue)<br />
    }<br />
    .bg--focus { <br />
      &nbsp;&nbsp;background: var(--color--focus) <br/>
    }<br />
    .color--focus { <br/>
      &nbsp;&nbsp;color: var(--color--focus) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--primary">
      bg--primary
    </div>
    <div class="color--primary">
      color--primary
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--primary: var(--color--bluelight);<br/>&nbsp;&nbsp;--fgcolor--primary: var(--fgcolor--bluelight)<br />
    }<br />
    .bg--primary { <br />
      &nbsp;&nbsp;background: var(--color--primary);<br/>&nbsp;&nbsp;color: var(--fgcolor--primary) <br/>
    }<br />
    .color--primary { <br/>
      &nbsp;&nbsp;color: var(--color--primary) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--secondary">
      bg--secondary
    </div>
    <div class="color--secondary">
      color--secondary
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--secondary: var(--color--graa3);<br/>&nbsp;&nbsp;--fgcolor--secondary: var(--fgcolor--graa3)<br />
    }<br />
    .bg--secondary { <br />
      &nbsp;&nbsp;background: var(--color--secondary);<br/>&nbsp;&nbsp;color: var(--fgcolor--secondary) <br/>
    }<br />
    .color--secondary { <br/>
      &nbsp;&nbsp;color: var(--color--secondary) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--success">
      bg--success
    </div>
    <div class="color--success">
      color--success
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--success: var(--color--green);<br/>&nbsp;&nbsp;--fgcolor--success: var(--fgcolor--green)<br />
    }<br />
    .bg--success { <br />
      &nbsp;&nbsp;background: var(--color--success);<br/>&nbsp;&nbsp;color: var(--fgcolor--success) <br/>
    }<br />
    .color--success { <br/>
      &nbsp;&nbsp;color: var(--color--success) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--warning">
      bg--warning
    </div>
    <div class="color--warning">
      color--warning
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--warning: var(--color--red);<br/>&nbsp;&nbsp;--fgcolor--warning: var(--fgcolor--red)<br />
    }<br />
    .bg--warning { <br />
      &nbsp;&nbsp;background: var(--color--warning);<br/>&nbsp;&nbsp;color: var(--fgcolor--warning) <br/>
    }<br />
    .color--warning { <br/>
      &nbsp;&nbsp;color: var(--color--warning) <br/>
    }
    </code>
    </div>
    </div><h1>sections</h1><div class="flex">
    <div class="example">
    <div class="example-visual">
    <div class="bg--ekstra">
      bg--ekstra
    </div>
    <div class="color--ekstra">
      color--ekstra
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--ekstra: var(--color--red);<br/>&nbsp;&nbsp;--fgcolor--ekstra: var(--color--white)<br />
    }<br />
    .bg--ekstra { <br />
      &nbsp;&nbsp;background: var(--color--ekstra);<br/>&nbsp;&nbsp;color: var(--fgcolor--ekstra) <br/>
    }<br />
    .color--ekstra { <br/>
      &nbsp;&nbsp;color: var(--color--ekstra) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--filmmagasinet">
      bg--filmmagasinet
    </div>
    <div class="color--filmmagasinet">
      color--filmmagasinet
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--filmmagasinet: var(--color--purpledark);<br/>&nbsp;&nbsp;--fgcolor--filmmagasinet: var(--color--white)<br />
    }<br />
    .bg--filmmagasinet { <br />
      &nbsp;&nbsp;background: var(--color--filmmagasinet);<br/>&nbsp;&nbsp;color: var(--fgcolor--filmmagasinet) <br/>
    }<br />
    .color--filmmagasinet { <br/>
      &nbsp;&nbsp;color: var(--color--filmmagasinet) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--flash">
      bg--flash
    </div>
    <div class="color--flash">
      color--flash
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--flash: var(--color--orange);<br/>&nbsp;&nbsp;--fgcolor--flash: var(--color--white)<br />
    }<br />
    .bg--flash { <br />
      &nbsp;&nbsp;background: var(--color--flash);<br/>&nbsp;&nbsp;color: var(--fgcolor--flash) <br/>
    }<br />
    .color--flash { <br/>
      &nbsp;&nbsp;color: var(--color--flash) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--forbrug">
      bg--forbrug
    </div>
    <div class="color--forbrug">
      color--forbrug
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--forbrug: var(--color--blue);<br/>&nbsp;&nbsp;--fgcolor--forbrug: var(--color--white)<br />
    }<br />
    .bg--forbrug { <br />
      &nbsp;&nbsp;background: var(--color--forbrug);<br/>&nbsp;&nbsp;color: var(--fgcolor--forbrug) <br/>
    }<br />
    .color--forbrug { <br/>
      &nbsp;&nbsp;color: var(--color--forbrug) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--livescore">
      bg--livescore
    </div>
    <div class="color--livescore">
      color--livescore
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--livescore: var(--color--green);<br/>&nbsp;&nbsp;--fgcolor--livescore: var(--color--white)<br />
    }<br />
    .bg--livescore { <br />
      &nbsp;&nbsp;background: var(--color--livescore);<br/>&nbsp;&nbsp;color: var(--fgcolor--livescore) <br/>
    }<br />
    .color--livescore { <br/>
      &nbsp;&nbsp;color: var(--color--livescore) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--livescore2">
      bg--livescore2
    </div>
    <div class="color--livescore2">
      color--livescore2
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--livescore2: var(--color--lime);<br/>&nbsp;&nbsp;--fgcolor--livescore2: var(--color--black)<br />
    }<br />
    .bg--livescore2 { <br />
      &nbsp;&nbsp;background: var(--color--livescore2);<br/>&nbsp;&nbsp;color: var(--fgcolor--livescore2) <br/>
    }<br />
    .color--livescore2 { <br/>
      &nbsp;&nbsp;color: var(--color--livescore2) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--nationen">
      bg--nationen
    </div>
    <div class="color--nationen">
      color--nationen
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--nationen: var(--color--orangedark);<br/>&nbsp;&nbsp;--fgcolor--nationen: var(--color--white)<br />
    }<br />
    .bg--nationen { <br />
      &nbsp;&nbsp;background: var(--color--nationen);<br/>&nbsp;&nbsp;color: var(--fgcolor--nationen) <br/>
    }<br />
    .color--nationen { <br/>
      &nbsp;&nbsp;color: var(--color--nationen) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--nationen2">
      bg--nationen2
    </div>
    <div class="color--nationen2">
      color--nationen2
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--nationen2: var(--color--orange);<br/>&nbsp;&nbsp;--fgcolor--nationen2: var(--color--white)<br />
    }<br />
    .bg--nationen2 { <br />
      &nbsp;&nbsp;background: var(--color--nationen2);<br/>&nbsp;&nbsp;color: var(--fgcolor--nationen2) <br/>
    }<br />
    .color--nationen2 { <br/>
      &nbsp;&nbsp;color: var(--color--nationen2) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--nyheder">
      bg--nyheder
    </div>
    <div class="color--nyheder">
      color--nyheder
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--nyheder: var(--color--bluedark);<br/>&nbsp;&nbsp;--fgcolor--nyheder: var(--color--white)<br />
    }<br />
    .bg--nyheder { <br />
      &nbsp;&nbsp;background: var(--color--nyheder);<br/>&nbsp;&nbsp;color: var(--fgcolor--nyheder) <br/>
    }<br />
    .color--nyheder { <br/>
      &nbsp;&nbsp;color: var(--color--nyheder) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--nyheder2">
      bg--nyheder2
    </div>
    <div class="color--nyheder2">
      color--nyheder2
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--nyheder2: var(--color--black);<br/>&nbsp;&nbsp;--fgcolor--nyheder2: var(--color--white)<br />
    }<br />
    .bg--nyheder2 { <br />
      &nbsp;&nbsp;background: var(--color--nyheder2);<br/>&nbsp;&nbsp;color: var(--fgcolor--nyheder2) <br/>
    }<br />
    .color--nyheder2 { <br/>
      &nbsp;&nbsp;color: var(--color--nyheder2) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--sex-samliv">
      bg--sex-samliv
    </div>
    <div class="color--sex-samliv">
      color--sex-samliv
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--sex-samliv: var(--color--bordeaux);<br/>&nbsp;&nbsp;--fgcolor--sex-samliv: var(--color--white)<br />
    }<br />
    .bg--sex-samliv { <br />
      &nbsp;&nbsp;background: var(--color--sex-samliv);<br/>&nbsp;&nbsp;color: var(--fgcolor--sex-samliv) <br/>
    }<br />
    .color--sex-samliv { <br/>
      &nbsp;&nbsp;color: var(--color--sex-samliv) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--sex-samliv2">
      bg--sex-samliv2
    </div>
    <div class="color--sex-samliv2">
      color--sex-samliv2
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--sex-samliv2: var(--color--rose);<br/>&nbsp;&nbsp;--fgcolor--sex-samliv2: var(--color--white)<br />
    }<br />
    .bg--sex-samliv2 { <br />
      &nbsp;&nbsp;background: var(--color--sex-samliv2);<br/>&nbsp;&nbsp;color: var(--fgcolor--sex-samliv2) <br/>
    }<br />
    .color--sex-samliv2 { <br/>
      &nbsp;&nbsp;color: var(--color--sex-samliv2) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--skolefodbold">
      bg--skolefodbold
    </div>
    <div class="color--skolefodbold">
      color--skolefodbold
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--skolefodbold: var(--color--greenlight);<br/>&nbsp;&nbsp;--fgcolor--skolefodbold: var(--color--white)<br />
    }<br />
    .bg--skolefodbold { <br />
      &nbsp;&nbsp;background: var(--color--skolefodbold);<br/>&nbsp;&nbsp;color: var(--fgcolor--skolefodbold) <br/>
    }<br />
    .color--skolefodbold { <br/>
      &nbsp;&nbsp;color: var(--color--skolefodbold) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--sport">
      bg--sport
    </div>
    <div class="color--sport">
      color--sport
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--sport: var(--color--green);<br/>&nbsp;&nbsp;--fgcolor--sport: var(--color--white)<br />
    }<br />
    .bg--sport { <br />
      &nbsp;&nbsp;background: var(--color--sport);<br/>&nbsp;&nbsp;color: var(--fgcolor--sport) <br/>
    }<br />
    .color--sport { <br/>
      &nbsp;&nbsp;color: var(--color--sport) <br/>
    }
    </code>
    </div>
    
    <div class="example">
    <div class="example-visual">
    <div class="bg--tv">
      bg--tv
    </div>
    <div class="color--tv">
      color--tv
    </div>
    </div>
    <code>
    :root {<br />
      &nbsp;&nbsp;--color--tv: var(--color--red);<br/>&nbsp;&nbsp;--fgcolor--tv: var(--color--white)<br />
    }<br />
    .bg--tv { <br />
      &nbsp;&nbsp;background: var(--color--tv);<br/>&nbsp;&nbsp;color: var(--fgcolor--tv) <br/>
    }<br />
    .color--tv { <br/>
      &nbsp;&nbsp;color: var(--color--tv) <br/>
    }
    </code>
    </div>
    </div>`