# hexo_theme_lovely

hexo_theme_lovely是以作者 [Nexmoe](https://github.com/nexmoe) 的主题 [hexo-theme-nexmoe](https://github.com/theme-nexmoe/hexo-theme-nexmoe) 为基础，添加新的功能部件、添加自定义的界面美化而得到的。

## 新增特性

- Markdown内的Latex公式支持（包括对公式块和公式编号的支持）
- 新增站内搜索
- 优化Gitalk配置
- 养宠物配置
- 鼠标单击特效

![新增效果](https://raw.githubusercontent.com/Su-Lemon/sources/master/imgs/blog/20210226115452.jpg)

![Latex公式支持](https://raw.githubusercontent.com/Su-Lemon/sources/master/imgs/blog/20210226115722.jpg)

## 演示

hexo_theme_lovely： [爱吃猫的小鱼干的Blog](https://su-lemon.github.io/blog/) 

## 教程

### nexmoe主题基本配置教程

请查看原作者教程 [https://docs.nexmoe.com/](https://docs.nexmoe.com/) 

若希望安装本主题，将 `git clone <url>` 中的 `<url>` 替换为lovely的仓库地址。

### lovely主题配置教程

以下配置涉及的 `js` 和 `css` 资源已上传至 [我的资源仓库](https://github.com/Su-Lemon/sources) 。

1. **Latex公式支持**

   - 卸载默认的渲染工具，安装pandoc（目前，默认渲染工具和kramed渲染工具都存在很多问题，使Latex公式显示为源码，而不是希望的公式形式）。安装 hexo-math 插件以支持 latex 公式。

   ```
   npm uninstall hexo-renderer-marked --save
   npm install hexo-renderer-pandoc --save
   npm install hexo-math --save
   ```

   - 在站点配置文件  `_config.yml` 中添加 hexo-math 插件

   ```
   #  _config.yml
   # 为博文中 Latex 公式正常渲染服务的pandoc配置
   math:
       engine: 'mathjax'
   
   markdown:
     plugins:
       - markdown-it-footnote
       - markdown-it-sup
       - markdown-it-sub
       - markdown-it-abbr
       - markdown-it-emoji
       - hexo-math
   ```

   - 在主题配置文件开启mathjax（本主题默认已开启）

2. **站内搜索**

   -  需要使用 `hexo-generator-search` 生成索引

   ```
   npm install --save hexo-generator-search
   ```

   - 在站点配置文件 `_config.yml` 当中写入如下配置，即可为全站的文档生成索引文件了

   ```
   #  _config.yml
   search:
     path: search.xml
     field: post
   ```

   - 站内搜索本主题默认已开启。

3. **养宠物配置**

   - 安装依赖，安装宠物模型（模型可替换，详情见  [hexo-helper-live2d](https://github.com/EYHN/hexo-helper-live2d) ）

   ```
   npm install --save hexo-helper-live2d
   npm install --save live2d-widget-model-hijiki
   ```

   - 在站点配置文件 `_config.yml` 当中写入如下配置

   ```
   # 养宠物配置
   live2d:
     enable: true
     scriptFrom: local  # 默认
     pluginRootPath: live2dw/  # 插件在站点上的根目录(相对路径)
     pluginJsPath: lib/  # 脚本文件相对与插件根目录路径
     pluginModelPath: assets/  # 模型文件相对与插件根目录路径
     tagMode: false  # 标签模式, 是否仅替换 live2d tag标签而非插入到所有页面中
     debug: false  # 调试, 是否在控制台输出日志
     model:
       use: live2d-widget-model-hijiki  # npm-module package name
     display:
       position: right
       width: 150
       height: 300
     mobile:
       show: true
     react:
       opacity: 0.7
   ```

4. **鼠标单击特效**

   本主题默认已添加，可以切换不同特效

   ```
   # 主题的_config.yml
   # 鼠标点击特效
   effects:
     firework: false
     firework1: true
   ```