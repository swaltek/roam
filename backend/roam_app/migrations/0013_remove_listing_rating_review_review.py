# Generated by Django 4.0.4 on 2022-05-05 01:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('roam_app', '0012_merge_20220504_2148'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='listing',
            name='rating',
        ),
        migrations.AddField(
            model_name='review',
            name='review',
            field=models.CharField(choices=[(1, 'Very bad'), (2, 'Bad'), (3, 'Okay'), (4, 'Good'), (5, 'Excellent')], default=3, max_length=9),
        ),
    ]
