### discordのbotのつくりかた   
###### herokuで動かすまで
githubに連携   
githubで新しいレポジトリをつくると、gitを入れてgithubにやるまでのコマンドを教えてくれる（以下例）   
```
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/ryogoOkura/ほげほげ.git
git push -u origin master  
```
herokuに連携
herokuで新しいアプリをつくって、Deployment methodからgithubを選択   
Resourcesからweb npm startではなくbot node app.jsを選択    
これでbotとして動くはず

###### botをdiscord鯖に招待    
このURL https://discordapp.com/developers/applications から新しいアプリを作る    
botsから新しいbotをつくってTOKENをherokuに環境変数として登録する   
OAuth2からSCOPESとBOT PERMISSIONSを選んで生成されたURLにアクセスすると、鯖に招待できる    
