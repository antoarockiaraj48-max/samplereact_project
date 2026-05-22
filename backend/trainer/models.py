from django.db import models

# Create your models here.
class Trainer(models.Model):
    spec_choices = [
        ('Frontend Development', 'Frontend Development'),
        ('Backend Development','Backend Development'),
        ('UI/UX Design','UI/UX Design'),
        ('Data Science','Data Science'),
        ('Cyber Security','Cyber Security'),
    ]
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    specialization = models.CharField(max_length=50,choices=spec_choices)
    experience = models.CharField(max_length=30)
    skills = models.CharField(max_length=200)
    bio = models.TextField()
    course = models.CharField(max_length=100)
    isactive = models.BooleanField(default=True)
    document = models.FileField(upload_to='files/',blank=True,null=True)
    profile_image = models.ImageField(
    upload_to='profiles/',
    blank=True,
    null=True
)

    def __str__(self):
        return self.name