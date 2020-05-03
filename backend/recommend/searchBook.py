from lxml import etree
import json
import random
import requests
import time
import recommend.proxy
import recommend.user as user
import urllib.request


def getResqutes(tag, num):
    urlRequest = ""
    result_list = []
    # filename = tag + ".json"
    # with open(filename, 'a', encoding='utf-8') as file:
    #     file.write("[")
    if tag[0] == '%':
        urlRequest = "https://book.douban.com/tag/" + urllib.parse.quote(tag) + "?start={}"
    else:
        urlRequest = "https://book.douban.com/tag/" + tag + "?start={}"
    # 获取诗词类图书的请求
    # urls = [urlRequest.format(str(i)) for i in
    #         range(0, 1000, 20)]
    # # 豆瓣分类图书每页20本，搜索一千本，每次搜索完一页，数字加20表示跳转到下一页继续搜索
    url = urlRequest.format((str(random.randint(1, 6) * 20)))
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
    count = count[0:num]
    for info in count:
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
            # 以json形式保存输出结果
            # with open(filename, 'a', encoding='utf-8') as file:
            #     file.write(json.dumps(result, ensure_ascii=False) + ',' + '\n')
    return result_list
