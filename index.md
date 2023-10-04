---
layout: default
title: "Happy Jekylling with Tailwind!"
---

## You're ready to go!

Start developing your Jekyll website.  
See the example post:

<ul class="list-disc">
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}" class="text-blue-300">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
