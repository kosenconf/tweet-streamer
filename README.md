# Tweet Streamer

Twitter の Stream API と WebSocket を使用し、Tweet をリアルタイムにサブスクリーンに投影することを目的として作成しました。

## pusher

`$ ruby twitter-search.rb kosenconf`

のように引数を与えて起動すると、与えた引数を検索語として Twitter の Stream API に接続し、得られる tweet を送信します。

## viewer

HTTP でアクセスできる場所に一式を設置してください。Google Chrome 等の WebSocket 対応ブラウザで `index.html` を開くと、pusher が送信する tweet が次々に流れてきます。
