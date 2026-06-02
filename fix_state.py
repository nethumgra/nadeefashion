import re

file_path = "c:/Users/USER/Downloads/kandywolrd-main/kandywolrd-main/index.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# I need to remove the isLoadingMore checks from the injected functions because the scroll listener already handles it.
content = content.replace("if (isLoadingMore) return;", "")
content = content.replace("isLoadingMore = true;", "")
# But wait, we DO want the scroll listener to set isLoadingMore = true! 
# If I blindly replace 'isLoadingMore = true;', it will remove it from the scroll listener too!

# Let's read the file again and do a regex replacement for the functions only.
