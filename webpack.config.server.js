import path from 'path'
import webpack from 'webpack'

const CURRENT_WORKING_DIR = process.cwd()

const config = {
    name: "server",
    entry: [path.CURRENT_WORKING_DIR, './server/server.js'],
    target: "node",
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist'),
        filename: "server.generated.js",
        publicPath: '/dist',
        lybraryTarget: "commonjs2"
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    }
}

export default config