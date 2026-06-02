import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

def extract(start_pattern, end_pattern):
    start = content.find(start_pattern)
    if start == -1: return ""
    end = content.find(end_pattern, start) + len(end_pattern)
    return content[start:end]

header_html = extract('<div class="bg-black text-white', '</nav>')
footer_html = extract('<footer', '</footer>')
m_start = content.find('<!-- Mobile Navigation Drawer -->')
m_end = content.find('<section id="get-in-touch"')
modals_html = content[m_start:m_end] if m_start != -1 and m_end != -1 else ""

def escape_js(html_str):
    return html_str.replace('`', '\\`').replace('$', '\\$')

# Write header.js
with open('components/header.js', 'w', encoding='utf-8') as f:
    f.write(f"document.write(`{escape_js(header_html)}`);\n")

# Write footer.js
with open('components/footer.js', 'w', encoding='utf-8') as f:
    f.write(f"document.write(`{escape_js(footer_html)}`);\n")

# Write modals.js
with open('components/modals.js', 'w', encoding='utf-8') as f:
    f.write(f"document.write(`{escape_js(modals_html)}`);\n")

print("Created header.js, footer.js, modals.js")
