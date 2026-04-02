from .views import BookViewSet
from rest_framework.routers import DefaultRouter

from ..new_project.urls import urlpatterns

router = DefaultRouter()

router.register('books', BookViewSet)

urlpatterns = router.urls

