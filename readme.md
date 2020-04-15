# **iDo 微信小程序介绍文档（简版）**

## 项目背景

&emsp;&emsp;App Store等应用商店上线的专注考研信息类app寥寥无几（非留学向），而且现有的所有的应用都更加专注于一些考研方面的临时准备信息，而不是一个完整的大学生的学习周期，基本上找不到小程序能够指导一个刚刚入学的大学生朝他的方向进行努力。所以希望开发一个小程序能够提供给所有的大学生一个借鉴性的功能，从大一开始对他们的选课，课外阅读书籍，专业方向，进行一些适合的推荐。能作为一个陪跑类型的小程序专门关注大学生在考研过程中应该注意的事项。因为开发者是计算机专业相关的所以暂时只考虑开发计算机专业的相关专业，进行构建。

## 项目理念

&emsp;&emsp;就好像在每一天您可以通过我们的小程序清晰的看到你要完成的目标，让每一天的空闲时间都能够进行充分的利用，能够用空闲时间有方向性的进行学习，为之后的考研做准备。

## 项目定位

### 目标人群

本科生

### 核心功能

<a href="#function">见功能描述</a>

### 推荐内容

* 参考书

* 竞赛（难度）
 
* *参考资料*

* **他人文章**


## 程序界面

<!-- UI

*注：如下图片仅为部分界面模板，请以实际产品为准*


<img src="https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8FiDo/%E9%A6%96%E6%AC%A1%E7%99%BB%E5%BD%95%E6%8E%88%E6%9D%83%E9%A1%B5%E9%9D%A2.png" height = "400" title="用户首次登录界面" type="display:inline">
<img src="https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8FiDo/%E9%99%A2%E6%A0%A1%E4%BF%A1%E6%81%AF%E7%95%8C%E9%9D%A2.png" height = "400" title="院校信息界面" type="display:inline">
<img src="https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8FiDo/%E7%9B%AE%E6%A0%87%E4%BF%A1%E6%81%AF%E7%95%8C%E9%9D%A2.png" height = "400" title="目标信息界面" type="display:inline">


<figure class="half">
    <img src="https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8FiDo/%E9%A6%96%E6%AC%A1%E7%99%BB%E5%BD%95%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E9%A1%B5%E9%9D%A2.png" height = "400" title="用户首次登录个人信息界面">
    <img src="https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8FiDo/%E6%AD%A3%E5%B8%B8%E7%99%BB%E5%BD%95%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E9%A1%B5%E9%9D%A2.png" height = "400" title="个人信息界面">
</figure>

*p1: 用户首次登录界面*

*p2: 院校信息界面*

*p3: 目标信息界面*

*p4: 用户首次登录个人信息界面*

*p5: 个人信息界面*

## 使用流程

- **用户微信一键授权登录**

    <img src="https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8FiDo/%E9%A6%96%E6%AC%A1%E7%99%BB%E5%BD%95%E6%8E%88%E6%9D%83%E9%A1%B5%E9%9D%A2.png" height = "400">

- **浏览院校信息**

    <img src="https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8FiDo/%E9%99%A2%E6%A0%A1%E4%BF%A1%E6%81%AF%E7%95%8C%E9%9D%A2.png" height = "400">

- **在个人信息界面设置目标专业与目标院校**

    <img src="https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8FiDo/%E9%A6%96%E6%AC%A1%E7%99%BB%E5%BD%95%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E9%A1%B5%E9%9D%A2.png" height = "400">

- **个人信息界面变更**

    <img src="https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8FiDo/%E6%AD%A3%E5%B8%B8%E7%99%BB%E5%BD%95%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E9%A1%B5%E9%9D%A2.png" height = "400">

- **目标信息界面浏览招生信息等信息**

    <img src="https://nandodu-blog.oss-cn-shanghai.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8FiDo/%E7%9B%AE%E6%A0%87%E4%BF%A1%E6%81%AF%E7%95%8C%E9%9D%A2.png" height = "400">
-->

## 使用说明

### 新用户登陆

* 登陆界面是小程序的logo加上一个登陆按钮。

* 登陆之后显示所有的院校的排名，排序按照院校研究生指导能力标准进行

* 引导用户进行个人的信息设置

* 设置完成之后引导用户进入推荐界面。之后按照老用户界面运行

### 老用户使用

* 直接打开推荐页面，可以切换书籍，竞赛等等页面

* 在完成一个推荐后支持直接点击完成按钮。

* 觉得一个推荐有用支持点击收藏按钮，放入推荐按收藏页，照样进行分类。

* 支持对一个推荐点踩，如果实在是不适合，可以点踩，减少推荐

* 觉得目前推荐没有什么好的，支持下拉刷新新的一批推荐。

* 可以考虑支持任务提醒，将一部分书籍或者竞赛设定为进行中，可以在时间差不多的时候进行消息提醒，但是可能需要配套的微信服务（存在，但是不知道怎么使用）

## <h2 id="function">功能描述</h2>

1. 提供一部分的院校的排名，标准为院校研究生指导能力。

2. 提供设定个人目标，目前只能选择计算机相关专业，同时要求填写年纪。

3. 提供修改专业或者是院校目标的功能

4. 提供查看自己的目标院校的招生信息，招生简章，同时根据设定的年纪进行一些比赛、书籍等的推荐。

5. 在目标信息，和个人信息页每日刷新一句鼓励格言。

6. 提供点赞功能，看到好多推荐可以直接点赞让更多的人看到这个推送。

7. 提供对准客户填写的目标专业的推荐，通过爬虫能够找到网上的多方面的资料。

8. 提供给用户可以标记该推荐已经完成的标签。

9. 提供用户浏览已经完成的推荐书籍等的列表