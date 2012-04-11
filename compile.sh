rm app/assets/view.html
find app/assets | grep ".swp" | xargs rm
echo "<html><head><script type=\"text/javascript\">" > app/assets/view
find app/assets | grep ".js" | xargs cat  >> app/assets/view
echo "</script><style>" >> app/assets/view
find app/assets | grep ".css" | xargs cat  >> app/assets/view
echo "</style></head><body>" >> app/assets/view
#cat app/assets/layout.html >> app/assets/view
find app/assets | grep ".html" | xargs cat  >> app/assets/view
echo "</body></html>" >> app/assets/view
mv app/assets/view app/assets/view.html
