# 快代理
import requests
from lxml.html import etree

url = 'http://www.kuaidaili.com/free/inha/6'  # 快代理
data = requests.get(url)
html = etree.HTML(data.text)

# 找xpath
ip_xpath = '//*[@id="list"]/table/tbody/tr/td[1]/text()'
port_xpath = '//*[@id="list"]/table/tbody/tr/td[2]/text()'
http_or_https_xpath = '//*[@id="list"]/table/tbody/tr/td[4]/text()'

# 匹配内容
ip_list = html.xpath(ip_xpath)
port_list = html.xpath(port_xpath)
http_or_https_list = html.xpath(http_or_https_xpath)

# 进行组合
list_zip = zip(ip_list, port_list, http_or_https_list)
proxy_dict = {}
proxy_list = []
for ip, port, http_or_https in list_zip:
    proxy_dict[http_or_https] = f'{ip}:{port}'
    proxy_list.append(proxy_dict)
    proxy_dict = {}

# 西刺代理
# import re
#
# import requests
# from bs4 import BeautifulSoup
#
# import user
#
# import random
#
#
# def getListProxies():
#     session = requests.session()
#     headers = {'User-Agent': user.getuser()}
#     proxies = random.choice(proxy_list)
#     page = session.get("http://www.xicidaili.com/nn/2", headers = headers,proxies = proxies)#西刺代理
#     soup = BeautifulSoup(page.text, 'lxml')
#
#     proxyList = []
#     taglist = soup.find_all('tr', attrs={'class': re.compile("(odd)|()")})
#     for trtag in taglist:
#         tdlist = trtag.find_all('td')
#         proxy = {'http': tdlist[1].string + ':' + tdlist[2].string}
#
#         proxyList.append(proxy)
#         # 设定代理ip个数
#         if len(proxyList) >= 20:
#             break
#
#     return proxyList
