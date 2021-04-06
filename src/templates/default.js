import packageJson from '../../package.json'

export default (html) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${packageJson.name}</title>
        <meta name="description" content="${packageJson.description}">
        <meta name="keywords" content="${packageJson.keywords.join(", ")}">
        <style>
            html, body {
                height: 100%;
                width: 100%;
                margin: 0;
                font-family: helvetica;
            }
        </style>
    </head>
    <body>
        <div id="root">
            ${html}
        </div>
        /**
         * client bundle 前后端同构，在此之前为纯静态页面，通过 bundle 增加对应事件监听
         * client bundle 是通过 preact 的 ”hydrate“ 进行构建（src/client.js），
         * 而常规的客户端渲染时用的是 render
        */
        <script type="module" src="client.js" async></script>
    </body>
    </html>
`