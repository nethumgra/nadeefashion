import re

def replace_between(content, start_marker, end_marker, replacement):
    start = content.find(start_marker)
    if start == -1: return content
    end = content.find(end_marker, start)
    if end == -1: return content
    end += len(end_marker)
    return content[:start] + replacement + content[end:]

# Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace header
content = replace_between(content, '<div class="bg-black text-white py-2 text-sm">', '</nav>', '<script src="components/header.js"></script>')
# Replace footer
content = replace_between(content, '<footer', '</footer>', '<script src="components/footer.js"></script>')
# Replace modals
m_start = content.find('<!-- Mobile Navigation Drawer -->')
m_end = content.find('<section id="get-in-touch"')
if m_start != -1 and m_end != -1:
    content = content[:m_start] + '<script src="components/modals.js"></script>\n    ' + content[m_end:]

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated index.html")

# Update product-detail.html
with open('product-detail.html', 'r', encoding='utf-8') as f:
    pd_content = f.read()

# Replace header
pd_content = replace_between(pd_content, '<div class="bg-black text-white py-2 text-sm">', '</nav>', '<script src="components/header.js"></script>')
# Replace footer
# product-detail might not have footer, let's see. If not, we can just insert it at the end of body.
f_start = pd_content.find('<footer')
if f_start != -1:
    pd_content = replace_between(pd_content, '<footer', '</footer>', '<script src="components/footer.js"></script>')
else:
    # insert before script tags at the bottom
    # find last </script>
    s_idx = pd_content.find('<script>')
    if s_idx == -1: s_idx = pd_content.find('</body>')
    pd_content = pd_content[:s_idx] + '<script src="components/footer.js"></script>\n' + pd_content[s_idx:]

# Insert modals at bottom too
m_start_pd = pd_content.find('<!-- Mobile Navigation Drawer -->')
if m_start_pd != -1:
    m_end_pd = pd_content.find('<!-- user-info-modal end -->') # this marker might not exist
    if m_end_pd == -1: 
        m_end_pd = pd_content.find('<script>')
    if m_end_pd != -1:
        pd_content = pd_content[:m_start_pd] + '<script src="components/modals.js"></script>\n' + pd_content[m_end_pd:]
else:
    # Just insert it before footer
    s_idx = pd_content.find('<script src="components/footer.js">')
    if s_idx == -1: s_idx = pd_content.find('</body>')
    pd_content = pd_content[:s_idx] + '<script src="components/modals.js"></script>\n' + pd_content[s_idx:]


with open('product-detail.html', 'w', encoding='utf-8') as f:
    f.write(pd_content)

print("Updated product-detail.html")
