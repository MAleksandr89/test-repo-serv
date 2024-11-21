# Generated by Django 4.2.16 on 2024-11-19 06:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_alter_mainskills_options_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hardandsoftskills',
            name='skill_type',
            field=models.CharField(choices=[('hard', 'Hard'), ('soft', 'Soft')], max_length=50, verbose_name='Тип навыка'),
        ),
        migrations.AlterField(
            model_name='mainskills',
            name='level',
            field=models.IntegerField(verbose_name='Уровень навыка'),
        ),
        migrations.AlterField(
            model_name='mainskills',
            name='skill',
            field=models.CharField(max_length=100, verbose_name='Название навыка'),
        ),
    ]
