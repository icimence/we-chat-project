# **“iDo研学派”小程序介绍文档**

&emsp;&emsp;本篇介绍文档适用于“2020中国高校计算机大赛——微信小程序应用开发赛”作品提交的介绍文档，关于“iDo研学派”的更多细节，欢迎在微信小程序中搜索该关键词，将“iDo研学派”添加到“我的小程序”进行体验。

## **1. 项目概要**

### &emsp;&emsp;**1.1 项目背景**

&emsp;&emsp;&ensp;进入大学，面对丰富多彩的大学生活，很多同学往往因为突然涌来的大量信息，或是缺少途径了解适合自己的信息，时常会感到茫然。不知道自己从何入手，不知道如何规划自己的大学生活。陷入明明有很多事情可做，却因目标不明确或盲目选择等等原因而贻误了大学学习的宝贵时光。

### &emsp;&emsp;**1.2 项目理念**

&emsp;&emsp;&ensp;该项目旨在通过提供用户多种可选择的学习目标，帮助用户确立本科期间的长远目标，以及为达到长远目标帮助规划可由用户自主选择的短期目标，并根据设定的目标提供精准的信息，从一本书、、一场竞赛……开始，及时提醒用户完成一个又一个的短期任务，陪伴用户以梦为马，不负韶华。

### &emsp;&emsp;**1.3 项目定位**

&emsp;&emsp;&ensp;为大学生更好地完成学业或进一步深造提供强有力的信息支持与目标引领（陪跑小程序）。

### &emsp;&emsp;**1.4 目标人群**

&emsp;&emsp;&ensp;本科生。

## **2. 应用场景**

&emsp;&emsp;刚升入大学的小明对自己的大学生活很迷茫，参加社团、参加歌唱比赛、参加志愿活动……忙忙碌碌之间，一年过去了，可是他还没有找到自己的定位。大二退出社团之后，小明听了几场学校开设的讲座，开始对自己的专业、自己的出路深入思考，可是迎新晚会、同学聚餐……推杯换盏之间，小明仍然在浑浑噩噩地生活。这时候，他遇到了一款名为“iDo研学派”的小程序，从注册到选择自己未来的专业目标，从竞赛图书等的推荐到日常ddl的任务提醒，小明开始清楚自己每天、每周、每月甚至这一年要做的事情，也慢慢从门外的喧哗回归到沉下心来准备一次比赛、读一本好书。“iDo研学派”就像一个小助理一样，每天把小明最需要做的事情标识出来，也每天在推荐小明去做更多有挑战性的事情。有了目标的小明在大学生活得更坦然了，时间也管理得更合理了，而这就是“iDo研学派”诞生的初衷——陪跑。

&emsp;&emsp;上述场景决不是我杜撰的，而是一些实实在在发生在我身边的事情，发生在我身上，也发生在我认识的人身上。之前上课过程中，老师也给我们看过毕业生拍的求职短片，真的令我很惊讶，有一部分学生直到毕业之前都没有参加过竞赛或者是实习，或者是其他一些我们在大二大三本该努力尝试去做的事情。小程序本身就有着易用、轻便的优势，我就想依托这一平台，打造一个大学生适用的备忘录式的小程序。

## **3. 解决的实际问题**

&emsp;&emsp;“iDo研学派”表面上是一个备忘录式的小程序，它支持用户分门别类记录要做的事情，并加以时间提醒。而深入小程序其中会发现，“iDo研学派”是有着严谨的内部逻辑的，它并不是简单的“推荐+收藏”的传统结合，而是“目标+推荐+任务”的全新导向式结构。我们可以看到，市面上做推荐算法的很多，推荐收藏的传统组合往往会导致“收藏夹里吃灰”这一不可否认的事实。那么“iDo研学派”要做的，就是把“任务”放在首位，看到想挑战的竞赛、想读的书，第一想法不应该是收藏起来，而应该是我该什么时候报名、从哪一天开始读、要用多久做完，只有这样，我们才不会貌似见多识广，实则孤陋寡闻。

&emsp;&emsp;“iDo研学派”定位也是很明确的，虽然家庭主妇、上班白领甚至是老年人也可以用这个小程序做备忘录，但是我们主打的以及陆续推出的项目，也都是建立在“大学”这一基础之上的。不可否认，很多学生都是从大学才开始“手机自由”，那么在微博、知乎、bilibili等等这些高受众人群软件的冲击下，就很需要一个让大学生管控自己、树立目标、付出实践的小程序时刻提醒、陪伴着自己。“iDo研学派”不是唯一一个这样做的，却也是致力于此的；即使做的不是最好的，也是抱着这样的决心的。

## **4. 需求分析**

### &emsp;&emsp;**4.1 目的**

&emsp;&emsp;&ensp;描述“iDo研学派”的功能需求和非功能需求。除特殊说明之外，下述需求都是高优先级需求。

### &emsp;&emsp;**4.2 范围**

&emsp;&emsp;&ensp;“iDo研学派”是为本科生开发的小程序。开发的目标是为大学生更好地完成学业或进一步深造提供强有力的信息支持与目标引领，包括目标设定、信息推荐、任务鞭策和收藏查看。

&emsp;&emsp;&ensp;通过“iDo研学派”的应用，期望培养用户良好的学习意识，提高时间利用率，在大学中能怀抱梦想，从容前行。

### &emsp;&emsp;**4.3 参考文献**

&emsp;&emsp;&ensp;1) IEEE标准。

&emsp;&emsp;&ensp;2) 《软件工程与计算（卷二）：软件开发的技术基础》

### &emsp;&emsp;**4.4 产品功能**

&emsp;&emsp;&ensp;SF1: 提供目标方向

&emsp;&emsp;&ensp;SF2: 推荐与目标相关的书籍

&emsp;&emsp;&ensp;SF3: 推荐学科竞赛

&emsp;&emsp;&ensp;SF4: 支持任务添加和任务显示

&emsp;&emsp;&ensp;SF5: 根据截止日期显示当前紧急任务

&emsp;&emsp;&ensp;SF6: 支持任务过期提示

&emsp;&emsp;&ensp;SF7: 允许用户收藏推荐信息

### &emsp;&emsp;**4.5 用户特征**

&emsp;&emsp;&ensp;部分本科生：没有明确的目标，容易陷入迷茫导致无所事事。课外信息掌握得比较少，很少阅读课程相关的课外书籍。迷恋打游戏、追剧等耗时爱好，没有参加竞赛的想法和动力。不能很好地规划自己的时间，任务的截止日期容易遗忘或即使是记得也来不及完成。

### &emsp;&emsp;**4.6 功能需求**

#### &emsp;&emsp;&emsp;&emsp;4.6.1 选择专业目标

#### &emsp;&emsp;&emsp;&emsp;4.6.2 删除专业目标

#### &emsp;&emsp;&emsp;&emsp;4.6.3 推荐相关信息

#### &emsp;&emsp;&emsp;&emsp;4.6.4 添加任务信息

#### &emsp;&emsp;&emsp;&emsp;4.6.5 显示任务信息

#### &emsp;&emsp;&emsp;&emsp;4.6.6 显示紧急任务

#### &emsp;&emsp;&emsp;&emsp;4.6.7 删除任务信息

#### &emsp;&emsp;&emsp;&emsp;4.6.8 显示收藏信息

#### &emsp;&emsp;&emsp;&emsp;4.6.9 删除收藏信息

### &emsp;&emsp;**4.7 非功能需求**

#### &emsp;&emsp;&emsp;&emsp;4.7.1 安全性

&emsp;&emsp;&emsp;&emsp;&ensp;Safety1: 任务相关功能、收藏相关功能只允许经过微信授权的用户使用。

&emsp;&emsp;&emsp;&emsp;&ensp;Safety2: 小程序有两个开发人员（团队两个成员），可以对小程序进行前端更新以及后端数据库管理。

#### &emsp;&emsp;&emsp;&emsp;4.7.2 可维护性

&emsp;&emsp;&emsp;&emsp;&ensp;Modifiability1: 小程序数据库发生错误时，修改任务要能够在1人0.5天内完成。

&emsp;&emsp;&emsp;&emsp;&ensp;Modifiability2: 如果小程序需要添加新的推荐信息，要能够在2人7天内完成。

&emsp;&emsp;&emsp;&emsp;&ensp;Modifiability3: 如果小程序需要添加新的专业目标，要能够在1人3天内完成。

&emsp;&emsp;&emsp;&emsp;&ensp;Modifiability4: 如果小程序需要添加新的功能，要能够在2人0.5月内完成。

#### &emsp;&emsp;&emsp;&emsp;4.7.3 易用性

&emsp;&emsp;&emsp;&emsp;&ensp;Usability 1: 熟悉小程序的使用流程所需时间不超过10分钟。

&emsp;&emsp;&emsp;&emsp;&ensp;Usability 2: 推荐信息的速度达到6条/分钟。

#### &emsp;&emsp;&emsp;&emsp;4.7.4 约束

&emsp;&emsp;&emsp;&emsp;&ensp;IC1: 小程序不支持内部链接打开，需要在推荐页面获取源地址复制到浏览器进行访问。

### &emsp;&emsp;**4.8 数据需求**

#### &emsp;&emsp;&emsp;&emsp;4.8.1 数据定义

&emsp;&emsp;&emsp;&emsp;&ensp;DR1: 小程序需要存储的数据实体及其关系参见后文“数据库设计”。

&emsp;&emsp;&emsp;&emsp;&ensp;DR2: 小程序删除之后用户变更的数据仍然存在数据库中，以保证多设备登录时同步数据。

#### &emsp;&emsp;&emsp;&emsp;4.8.2 数据格式要求

&emsp;&emsp;&emsp;&emsp;&ensp;Format1: 添加的任务类别中不得包含英文字符'?'。

&emsp;&emsp;&emsp;&emsp;&ensp;Format2: 添加的任务名称中不得包含英文字符'?'。

## **5. 交互设计**

### &emsp;&emsp;**5.1 配色**

&emsp;&emsp;&ensp;“iDo研学派”画面主色为黄色，配色方案参考了精灵宝可梦中的皮卡丘，即黄色+橙红色+黑色，外加小程序中惯用的白色和灰白色。颜色搭配效果可参考以下两个界面：

&emsp;&emsp;&ensp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/IMG_9362.PNG' width='200'>&emsp;&emsp;&emsp;&emsp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/IMG_9364.PNG' width='200'>

&emsp;&emsp;&ensp;“iDo研学派”的图标选取以新鲜、养眼为标准，使用的图标能使界面有很好的增色。图标颜色力求与界面主色作区分，防止界面颜色过于单一化而产生视觉疲劳。图标效果可参考以下界面：

&emsp;&emsp;&ensp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/IMG_9365.PNG' width='200'>

### &emsp;&emsp;**5.2 整体设计原则**

&emsp;&emsp;&ensp;“iDo研学派”采用扁平化的设计风格，同时关注到用户回馈。小程序中的按钮点击时都会产生回馈效果，从而提升用户的体验感。部分按钮以及任务栏的设计上采用立体化的风格，使得画面整体看上去层次分明，具体效果可参考上一条中展示的前两幅图片。

&emsp;&emsp;&ensp;“iDo研学派”的设计秉持着简约实用的原则，每一个界面都没有累赘的元素，每一个元素都是为服务这个界面效果而精心设计的。

### &emsp;&emsp;**5.3 核心功能的交互设计**

&emsp;&emsp;&ensp;1）小程序的欢迎界面如下图，界面添加了动画效果，摇晃手机的同时波浪可以随之变化：

&emsp;&emsp;&ensp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/IMG_9387.PNG' width='200'>

&emsp;&emsp;&ensp;2）点击“开启我的研学之旅”后，页面跳转到用户信息界面，由于视频中介绍了未授权时的界面，此处就默认用户已完成授权，我们可以看到此时专业目标为空，通过“点击选择”可以进行专业目标添加：

&emsp;&emsp;&ensp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/IMG_9366.PNG' width='200'>&emsp;&emsp;&ensp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/IMG_9367.PNG' width='200'>&emsp;&emsp;&ensp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/IMG_9370.PNG' width='200'>

&emsp;&emsp;&ensp;3）点击专业目标名称，会显示“每日一研”，这是用户信息界面的彩蛋之一，会随机显示一条鼓励人心的格言；点击小提示旁边的小喇叭，会显示绕口令，这也是用户信息界面的彩蛋之一，会随机显示一条绕口令，这两个功能都是为了增添小程序的趣味性；点击反馈图标，可以进行用户意见反馈；通过点击黄色加号，可以对专业目标继续添加，但是专业目标上限是三个，超过三个或重复添加相同的专业目标都会有提示：

&emsp;&emsp;&ensp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/IMG_9368.PNG' width='200'>&emsp;&emsp;&ensp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/IMG_9369.PNG' width='200'>&emsp;&emsp;&ensp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/IMG_9386.PNG' width='200'>

&emsp;&emsp;&ensp;4）切换到推荐界面，可以看到每个推荐信息的下方都有三个按钮，分别用来获取信息源地址（复制到剪贴板）、添加到任务以及添加到收藏；添加到任务时会要求选择截止日期：

&emsp;&emsp;&ensp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/IMG_9371.PNG' width='200'>&emsp;&emsp;&ensp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/IMG_9372.PNG' width='200'>&emsp;&emsp;&ensp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/IMG_9373.PNG' width='200'>&emsp;&emsp;&ensp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/IMG_9374.PNG' width='200'>&emsp;&emsp;&ensp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/IMG_9375.PNG' width='200'>

&emsp;&emsp;&ensp;5）切换到任务显示界面，可以看到任务已经添加到任务栏中，通过点击任务条可以查看分类下的具体信息，包括任务名称、相关专业、截止日期；任务条在展开与收起的过程中会触发下方“皮卡丘”的变化，这一设计也是为了让任务显示界面显得更加活泼和亲和；长按任务信息可以进行删除，当同一类目的任务都被删除后，类目删除：

&emsp;&emsp;&ensp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/IMG_9376.PNG' width='200'>&emsp;&emsp;&ensp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/IMG_9377.PNG' width='200'>&emsp;&emsp;&ensp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/IMG_9378.PNG' width='200'>

&emsp;&emsp;&ensp;6）通常情况下，我们是通过点击皮卡丘“添加任务”的形态进行任务添加，切换到任务添加界面后，我们需要填写任务类别、相关专业、任务名称、任务日期，其中任务类别可自定义输入，且一次自定义输入后，下一次再打开任务类别选择器时，选择器会自动填充之前输入过的类别：

&emsp;&emsp;&ensp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/IMG_9380.PNG' width='200'>&emsp;&emsp;&ensp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/IMG_9379.PNG' width='200'>&emsp;&emsp;&ensp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/IMG_9381.PNG' width='200'>

&emsp;&emsp;&ensp;7）切换到用户信息界面的紧急任务栏，我们可以看到小程序自动选择截止日期最近的任务呈现在这里，方便用户尽快处理快到期的任务；同样，我们可以点击“皮卡丘”引起形态变化：

&emsp;&emsp;&ensp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/IMG_9382.PNG' width='200'>&emsp;&emsp;&ensp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/IMG_9383.PNG' width='200'>

&emsp;&emsp;&ensp;8）切换到用户信息界面的收藏栏，我们可以看到之前收藏的书目会添加到这里，书籍采用轮播图片样式，并添加了点击反馈效果，通过点击书籍卡片，我们可以查看书籍的详情信息，也可以一键删除：

&emsp;&emsp;&ensp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/IMG_9384.PNG' width='200'>&emsp;&emsp;&ensp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/IMG_9385.PNG' width='200'>

## **6. 技术开发方案**

### &emsp;&emsp;**6.1 小程序端**

#### &emsp;&emsp;&emsp;&emsp;6.1.1 原型设计

&emsp;&emsp;&emsp;&emsp;“iDo研学派”的原型设计采用的是Photoshop软件，开发初期经过队内讨论，确定了小程序的项目背景、项目理念、项目定位、目标人群、程序界面以及功能描述。小程序的后续开发都是基于原型设计进行的，很多起初“草稿式”的设计都在实际开发中摒弃，并采用了更理想的模型进行替代。

&emsp;&emsp;&emsp;&emsp;“iDo研学派”的原型设计秉持着简单易用的原则，将不同的功能点分布在不同的页面上，避免了功能的杂乱堆砌。整体的设计感力求清新明晰，可以减少用户在使用之余对UI的抱怨情绪。

#### &emsp;&emsp;&emsp;&emsp;6.1.2 框架

&emsp;&emsp;&emsp;&emsp;“iDo研学派”的前端是基于微信开发者工具开发的，采用的是传统的wxml+wxss+javaScript的框架。

&emsp;&emsp;&emsp;&emsp;![](https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/%E6%89%B9%E6%B3%A8%202020-06-04%20224337.png)

#### &emsp;&emsp;&emsp;&emsp;6.1.3 功能模块

&emsp;&emsp;&emsp;&emsp;&ensp;“iDo研学派”有五个核心页面，具体功能如下图所示：

&emsp;&emsp;&emsp;&emsp;&ensp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/%E5%89%8D%E7%AB%AF%E6%9E%B6%E6%9E%84%E5%9B%BE.png' width=600>

#### &emsp;&emsp;&emsp;&emsp;6.1.4 协作开发

&emsp;&emsp;&emsp;&emsp;&ensp;小程序前端开发过程全程使用git，开发过程规范且高效，部分提交截图如下：

&emsp;&emsp;&emsp;&emsp;&ensp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/%E6%89%B9%E6%B3%A8%202020-06-05%20111436.png' width=600>

### &emsp;&emsp;**6.2 后台服务器端**

#### &emsp;&emsp;&emsp;&emsp;6.2.1 架构图

&emsp;&emsp;&emsp;&emsp;<img src='https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/%E5%90%8E%E7%AB%AF%E6%9E%B6%E6%9E%84%E5%9B%BE.png' width=600>

#### &emsp;&emsp;&emsp;&emsp;6.2.2 后端核心代码

&emsp;&emsp;&emsp;&emsp;“iDo研学派”的后端核心代码分别用来实现推荐内容的爬取和数据传输以及备忘录功能的数据传输。

&emsp;&emsp;&emsp;&emsp;推荐内容的部分爬取代码如下：

```Python
from lxml import etree
import json
import random
import requests
import time
import recommend.proxy
import recommend.user as user
import urllib.request


def getResqutes(tag):
    urlRequest = ""
    result_list = []
    # filename = tag + ".json"
    # with open(filename, 'a', encoding='utf-8') as file:
    #     file.write("[")
    if tag[0] == '%':
        urlRequest = "https://book.douban.com/tag/" + urllib.parse.quote(tag) + "?start={}"
    else:
        urlRequest = "https://book.douban.com/tag/" + tag + "?start={}"
    # urls = [urlRequest.format(str(i)) for i in
    #         range(0, 1000, 20)]
    # # 豆瓣分类图书每页20本，搜索一千本，每次搜索完一页，数字加20表示跳转到下一页继续搜索
    url = urlRequest.format((str(random.randint(0, 25) * 20)))
    #    for url in urls
    # 每搜索1页20本书更换一次请求头信息和代理ip
    # 动态设置请求头信息
    headers = {'User-Agent': user.getuser()}
    # 动态设置代理ip信息
    List = recommend.proxy.proxy_list
    proxies = random.choice(List)
    # 打印搜索时代理ip信息
    print(proxies)
    data = requests.get(url, headers=headers, proxies=proxies)  # 此处是请求
    html = etree.HTML(data.text)  # 网页的解析
    count = html.xpath("//li[@class='subject-item']")
    info = count[random.randint(0, 19)]
    # 把页面获取的详情页面的信息转化成字符串link作为下面请求的url，有些网页比如京东在转化成字符串的同时需要在前面拼接"https://"
    link = ''.join(info.xpath("div[2]/h2/a/@href"))
    # 每爬取一本书线程休息随机时间，模拟人类行为
    time.sleep(random.random())
    # 控制台输出书籍详情页地址，便于观察爬取过程中的bug
    print(link)
    # author_name在类别页获取，因为详情页每个页面的作者对应的块位置不同，存在获取不到作者情况，导致书籍信息获取失败
    # author_name =''.join(info.xpath("div[2]/div[1]/text()")[0].split('/')[0]).replace(" ","")
    # print(author_name)
    # author_name = author_name.split()
    link_data = requests.get(link, headers=headers, proxies=proxies)
    html = etree.HTML(link_data.text)
    # 书名
    book_name = html.xpath("//*[@id='mainpic']/a/@title")
    # 图片url
    book_img = html.xpath("//*[@id='mainpic']/a/img/@src")
    # 作者信息，因为不同页面位置不同做判断
    author_name = html.xpath("//*[@id='info']/span[1]/a/text()")
    temp = ''.join(html.xpath("//*[@id='info']/span[1]/a/text()"))
    if temp is None or len(temp) == 0:
        author_name = html.xpath("//*[@id='info']/a[1]/text()")
        # 作者人数大于1时候用/分隔，并去除多余空格和换行符
    sum = ""
    if len(author_name) > 1:
        for item in author_name:
            sum += (str(item) + "/")
            author_name = sum
    else:
        author_name = author_name
    author_name = "".join(author_name)
    author_name = author_name.replace(" ", "")
    author_name = author_name.replace("\n", "")
    author_name = author_name.split()

    # 出版社
    press = html.xpath(u'//span[./text()="出版社:"]/following::text()[1]')
    # 出版年
    press_year = html.xpath(u'//span[./text()="出版年:"]/following::text()[1]')
    # 页数
    pages = html.xpath(u'//span[./text()="页数:"]/following::text()[1]')
    # 价格
    price = html.xpath(u'//span[./text()="定价:"]/following::text()[1]')
    # 图书ISBN
    ISBN = html.xpath(u'//span[./text()="ISBN:"]/following::text()[1]')
    # 评分
    score = html.xpath("//*[@id='interest_sectl']/div/div[2]/strong/text()")
    # 评价人数
    number_reviewers = html.xpath("//*[@id='interest_sectl']/div/div[2]/div/div[2]/span/a/span/text()")
    # 图书简介
    introduction = html.xpath("//*[@class='intro']/p/text()")

    for book_name, book_img, author_name, press, press_year, pages, price, ISBN, score, number_reviewers, introduction in zip(
            book_name, book_img, author_name, press, press_year, pages, price, ISBN, score, number_reviewers,
            introduction):
        result = {
            "book_name": book_name,
            "book_img": book_img,
            "author_name": author_name,
            "press": press,
            "press_year": press_year,
            "pages": pages,
            "price": price,
            "ISBN": ISBN,
            "score": score,
            "number_reviewers": number_reviewers,
            "introduction": introduction
        }
        print(result)
        result_list.append(result)
        return result
        # 以json形式保存输出结果
        # with open(filename, 'a', encoding='utf-8') as file:
        #     file.write(json.dumps(result, ensure_ascii=False) + ',' + '\n')
```

&emsp;&emsp;&emsp;&emsp;推荐内容的数据传输代码如下：

```Python
import recommend.searchBook as searchBook
import recommend.searchComp as searchComp
from django.http import JsonResponse
from django.http import HttpResponse


def getRecommendBook(request):
    res = request.GET['Tag']
    return_list = searchBook.getResqutes(res)
    # result = "["
    # for i in range(len(return_list) - 1):
    #     result += str(return_list[i])
    #     result += ","
    # result += str(return_list[-1])
    # result += "]"
    return JsonResponse(return_list)


def getRecommendComp(request):
    return_list = searchComp.getComp()
    # result = "["
    # for i in range(len(return_list) - 1):
    #     result += str(return_list[i])
    #     result += ","
    # result += str(return_list[-1])
    # result += "]"
    return JsonResponse(return_list)
```

&emsp;&emsp;&emsp;&emsp;备忘录功能的数据传输代码如下：

```Python
# -*- encoding=utf-8 -*-
import json

from django.http import JsonResponse, HttpResponse
from django.views import View
from utils.response import wrap_json_response, ReturnCode, CommonResponseMixin
from utils.auth import already_authorized, c2s
from .models import User


def test_session(request):
    request.session['message'] = 'Test Django Session OK!'
    response = wrap_json_response(code=ReturnCode.SUCCESS)
    request.session.save()
    return JsonResponse(data=response, safe=False)


class UserView(View, CommonResponseMixin):
    def get(self, request):
        print(request.COOKIES)
        openid = request.GET['openid']
        if not already_authorized(openid):
            response = self.wrap_json_response(code=ReturnCode.SUCCESS)
            return JsonResponse(data=response, safe=False)
        # open_id = request.session.get('open_id')
        user = User.objects.get(open_id=openid)
        data = {}
        data['major'] = json.loads(user.major)
        data['mission'] = json.loads(user.mission)
        data['type'] = json.loads(user.type)
        data['collection'] = json.loads(user.collection)
        response = self.wrap_json_response(data=data, code=ReturnCode.SUCCESS)
        print(response)
        return JsonResponse(data=response, safe=False)
        pass

    def post(self, request):
        received_body = request.body.decode('utf-8')
        received_body = eval(received_body)
        openid = received_body.get('openid')
        if not already_authorized(openid):
            response = self.wrap_json_response(code=ReturnCode.SUCCESS)
            return JsonResponse(data=response, safe=False)
        # open_id = request.session.get('open_id')
        user = User.objects.get(open_id=openid)
        majors = received_body.get('major')
        missions = received_body.get('mission')
        types = received_body.get('type')
        collections = received_body.get('collection')
        user.major = json.dumps(majors)
        user.mission = json.dumps(missions)
        user.type = json.dumps(types)
        user.collection = json.dumps(collections)
        user.save()
        response = self.wrap_json_response(data=user.major, code=ReturnCode.SUCCESS, message='modify user info success')
        return JsonResponse(data=response, safe=False)


def __authorize_by_code(request):
    '''
    使用wx.login的到的临时code到微信提供的code2session接口授权
    '''
    post_data = request.body.decode('utf-8')
    post_data = json.loads(post_data)
    code = post_data.get('code').strip()
    app_id = post_data.get('appId').strip()
    nickname = post_data.get('nickname').strip()

    response = {}
    if not code or not app_id:
        response['message'] = 'authorized failed, need entire authorization data.'
        response['code '] = ReturnCode.BROKEN_AUTHORIZED_DATA
        return JsonResponse(data=response, safe=False)

    data = c2s(app_id, code)
    openid = data.get('openid')
    print('get openid: ', openid)
    print('get nickname: ', nickname)
    if not openid:
        response = wrap_json_response(code=ReturnCode.FAILED, message='auth failed')
        return JsonResponse(data=response, safe=False)

    if not User.objects.filter(open_id=openid):
        new_user = User(open_id=openid, nickname=nickname)
        new_user.save()
    response = wrap_json_response(data=openid, code=ReturnCode.SUCCESS, message='auth success.')
    return JsonResponse(data=response, safe=False)


def authorize(request):
    return __authorize_by_code(request)


def get_status(request):
    print('call get_status function...')
    if already_authorized(request):
        data = {"is_authorized": 1}
    else:
        data = {"is_authorized": 0}
    response = CommonResponseMixin.wrap_json_response(data=data, code=ReturnCode.SUCCESS)
    return JsonResponse(response, safe=False)
```

#### &emsp;&emsp;&emsp;&emsp;6.2.3 数据库设计

&emsp;&emsp;&emsp;&emsp;&ensp;为方便前后端数据传输，“iDo研学派”采用一张user表进行数据存储，user表的信息如下表所示：

|列名|数据类型|允许空|备注|
|:---:|:---:|:---:|:---:|
|id|int|N|用户标识|
|open_id|varchar(32)|N|用户小程序标识|
|nickname|varchar(256)|N|用户昵称|
|mission|longtext|Y|任务|
|type|longtext|Y|任务类别|
|collection|longtext|Y|收藏|
|major|longtext|Y|专业|

#### &emsp;&emsp;&emsp;&emsp;6.2.4 服务器端

&emsp;&emsp;&emsp;&emsp;“iDo研学派”后端部署采用1核、2GB、1Mbps标准型S2服务器，并配置了uwsgi+nginx，使得小程序有更强的并发能力。

## **7. 团队组成与分工**

### &emsp;&emsp;**7.1 团队组成**

&emsp;&emsp;&ensp;队长：18级 南京大学软件学院 杜铭哲

&emsp;&emsp;&ensp;队员：18级 南京大学软件学院 戴俊浩

&emsp;&emsp;&ensp;指导教师：南京大学软件学院讲师 刘钦

### &emsp;&emsp;**7.2 团队分工**

|姓名|原型设计|前端编写|后端编写|服务端部署|代码修改|介绍文档|视频制作|
|:--:|:-----:|:-----:|:------:|:-------:|:-----:|:------:|:---:|
|杜铭哲|设计、绘制、修改|用户信息页面、任务显示页面、任务添加页面|后端框架搭建、前端对应代码部分|配置服务器、后端部署|校验错误与样式重写|编写文档|制作视频|
|戴俊浩|设计、修改|登录授权页面、浏览推荐页面|前端对应代码部分|后端部署|校验错误|||

## **8. 系统上线与运维**

&emsp;&emsp;“iDo研学派”由于是报名比赛之后才开始开发，所以功能目前尚未完善，比如支持更多专业目标、推荐更多类别资源、健全任务提醒机制、完善登录功能以及其他附加功能。另外，小程序暂无收费项目，后续会考虑引入记忆宫殿（类似于错题本和习题册）、经历日记（提醒用户保存最近参加过的活动，以免填写简历时忘记自己做过什么活动）、招生政策获取（爬取关注大学的招生信息网获取最新的考研咨询）等复杂功能模块以寻求营利点。总之，“iDo研学派”的初衷不会变，我们会根据用户数据反馈并结合自身实际情况对小程序进行扩展和升级，也期待“iDo研学派”能得到用户的认可和喜欢！

## **9. 引用非团队成员的开发成果**

- 前端编写逻辑参考学堂在线《学做小程序——基础篇》以及《学做小程序——实战篇：树洞小程序》

- 后端搭建与服务器部署参考“【No557】慕课 Django2.0+小程序技术打造微信小程序助手”

- 小程序中的部分图标使用自Iconfont平台

- 小程序中的部分样式代码修改自网络资料
