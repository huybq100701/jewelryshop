from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('jewels/<str:id>/', views.getJewel, name="jewel"),
    path('jewels/', views.getJewels, name="jewels"),
    path('notes/<str:pk>/', views.getNote, name="note"),
    path('notes/', views.getNotes, name="notes"),
    path('accounts/login', views.loginAccount, name="loginAccount"),
    path('accounts/create', views.createAccount, name="createAccount"),
    path('accounts/<str:id>', views.getAccount, name="account"),
    path('accounts/', views.getAccounts, name="accounts"),
    path('order/create', views.createOrder, name="createOrder"),
    path('order/<str:id>', views.retrieveOrder, name="getAllOrder"),
]