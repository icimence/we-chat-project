import recommend.searchBook as searchBook
from django.http import JsonResponse
from django.http import HttpResponse


def getRecommend(request):
    res = request.GET['Tag']
    res_list = res.split(".")
    tag = res_list[0]
    num = int(res_list[1])
    return_list = searchBook.getResqutes(tag, num)
    # result = "["
    # for i in range(len(return_list) - 1):
    #     result += str(return_list[i])
    #     result += ","
    # result += str(return_list[-1])
    # result += "]"
    return HttpResponse(return_list)
