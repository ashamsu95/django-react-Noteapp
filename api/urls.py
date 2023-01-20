from django.urls import path
from . import views



urlpatterns = [
    path('', views.getRoutes,name="routeApi"),
    path('notes/', views.getNotes,name="Notes"),
    path('note/create', views.createNote,name="create"),
    path('note/<str:pk>/update', views.updateNote,name="NoteUpadate"),
    path('note/<str:pk>/delete', views.deleteNote,name="delete"),
    path('note/<str:pk>/', views.getNote,name="Note"),
]
