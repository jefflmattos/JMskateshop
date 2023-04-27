from django.shortcuts import render


def home(request):
    return render(request, 'index.html')

def lojas(request):
    return render(request, 'lojas.html')

def produtos(request):
    return render(request, 'produtos.html')
