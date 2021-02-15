import favicon from './client/assets/images/kik.png'

export default ({markup, css, name}) => {
    return `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Kiriikou | ${name} </title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400">
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css" rel="stylesheet">
          <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
          
          <link rel="shortcut icon" href='${favicon}'>
           <link rel="apple-touch-icon" sizes="180x180" href="/client/assets/images/apple-touch-icon.png">
           <link rel="icon" type="image/png" sizes="32x32" href="/client/assets/images/favicon-32x32.png">
          <link rel="icon" type="image/png" sizes="16x16" href="/client/assets/images/favicon-16x16.png">
          <style>
              a{
                text-decoration: none
              }
          </style>
        </head>
        <body style="margin:0">
          <div id="root">${markup}</div>
          <style id="jss-server-side">${css}</style>
          
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
          <script src="https://rave-api-v2.herokuapp.com/flwv3-pug/getpaidx/api/flwpbf-inline.js"></script>
          <script type="text/javascript" src="/dist/bundle.js"></script>
        </body>
      </html>`
}
