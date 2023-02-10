from dataclasses import field
from django.contrib import admin
from .models import Question, Quiz, Category, Answer, UsersAnswer, QuizTaker
from django.db import models
from django.forms import TextInput, Textarea
from django.contrib.admin.widgets import FilteredSelectMultiple
from django import forms
from django.utils.translation import gettext_lazy as _
from nested_admin import NestedModelAdmin, NestedTabularInline
# Register your models here.
#admin.site.register(Quiz)

class AnswerInline(NestedTabularInline):
    model = Answer
    extra = 0


class QuestionInline(NestedTabularInline):
    
    model = Question
    extra = 0
    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows':3, 'cols':50})},
    }

    
    inlines = [AnswerInline,]

#  ADMINS #

class QuestionAdmin(admin.ModelAdmin):
    model = Question
    inlines = [AnswerInline,]

    
class QuizAdmin(NestedModelAdmin):
    model = Quiz
    
    list_display = ('title', 'category' )
    list_filter = ('category',)
    search_fields = ('description', 'category', )
    inlines = [QuestionInline,]
    readonly_fields=('time', 'required_score_to_pass', 'number_of_questions')

    

class CategoryAdmin(admin.ModelAdmin):
    search_fields = ('category', )

class UsersAnswerInline(admin.TabularInline):
	model = UsersAnswer

    
class QuizTakerAdmin(admin.ModelAdmin):
	inlines = [UsersAnswerInline,]



admin.site.register(Question, QuestionAdmin)
admin.site.register(Quiz, QuizAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Answer)
admin.site.register(QuizTaker, QuizTakerAdmin)
admin.site.register(UsersAnswer)
