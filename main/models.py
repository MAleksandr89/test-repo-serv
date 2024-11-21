from django.db import models

# Create your models here.
CHOUSE_TYPE_SKILL = (('hard', 'Hard'), ('soft', 'Soft'))

class MainSkills(models.Model):
    skill = models.CharField(verbose_name='Название навыка', max_length=100)
    level = models.IntegerField(verbose_name='Уровень навыка')

    class Meta:
        verbose_name = 'Навык на главной'
        verbose_name_plural = 'Навыки на главной'

    def __str__(self):
        return self.skill


class HardAndSoftSkills(models.Model):
    skill_type = models.CharField( verbose_name='Тип навыка', max_length=50, choices=CHOUSE_TYPE_SKILL )
    skill_name = models.CharField( verbose_name='Название', max_length=50 )
    skill_img = models.ImageField( verbose_name='Изображение', upload_to='skills', null=True )

    class Meta:
        verbose_name = 'Навык'
        verbose_name_plural = 'Навыки'

    def __str__(self):
        return self.skill_name