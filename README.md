# X Advanced Finder
- 高度なX（旧Twitter）検索を簡単に行えるブラウザ拡張機能

## 概要
- X（旧Twitter）の検索機能を強化し、高度な検索クエリを簡単に作成できる拡張機能です。
- GUIでフィルターを指定し、ワンクリックで検索を実行できます。

## 特徴（機能一覧）
- キーワード検索  
- 日付フィルター（開始日・終了日）  
- メディアフィルター（画像/動画）  
- いいね・リツイート・リプライ数でのフィルタリング  
- 言語フィルター  
- 投稿者・リプライ対象ユーザー指定  

## インストール方法
### **Chrome ウェブストアからインストール**
> **https://chromewebstore.google.com/detail/enldemfkbaemcpghkkcgaomdlneiglpb?utm_source=item-share-cb**

### **手動インストール（開発者向け）**
1. このリポジトリをクローン  
   ```sh
   git clone https://github.com/usxc/X-Advanced-Finder.git
   cd X-Advanced-Finder
   ```
2. Chromeで `chrome://extensions/` にアクセス  
3. **デベロッパーモード** を有効にする  
4. 「パッケージ化されていない拡張機能を読み込む」から、このフォルダを選択  

## 使い方
1. 検索条件を入力  
2. 「検索」ボタンを押す  
3. X（旧Twitter）の検索結果ページが開く  

## 開発者向け情報
### **ソースコード構成**
```
X-Advanced-Finder/
│── manifest.json  # 拡張機能のマニフェスト
│── popup.html     # 拡張機能のUI
│── popup.js       # 検索クエリの組み立て
│── styles.css     # スタイル
└── icons/         # アイコン関連
```

### **ライセンス**
MIT License
