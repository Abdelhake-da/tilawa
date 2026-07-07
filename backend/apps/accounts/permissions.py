from rest_framework.permissions import BasePermission

class IsManager(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == "manager"

class IsTeacher(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == "teacher"

class IsGuardian(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == "guardian"

class IsOwnerOrManager(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role in ("manager", "guardian")

class IsTeacherOfStudent(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == "teacher"
    def has_object_permission(self, request, view, obj):
        return obj.teacher.user == request.user

class IsGuardianOfStudent(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == "guardian"
    def has_object_permission(self, request, view, obj):
        return obj.guardian.user == request.user