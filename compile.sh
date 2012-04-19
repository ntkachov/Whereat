rm app/assets/view.html
find app/assets | grep ".swp" | xargs rm
echo '<html><head><meta name="viewport" content="width=100%; initial-scale=1; maximum-scale=1; minimum-scale=1; user-scalable=no;" /><script type="text/javascript">' > app/assets/view
find app/assets | sort | grep ".js" | xargs cat  >> app/assets/view
echo "</script><style>" >> app/assets/view
find app/assets | sort | grep ".css" | xargs cat  >> app/assets/view
echo "</style></head><body>" >> app/assets/view
#cat app/assets/layout.html >> app/assets/view
find app/assets | sort | grep ".html" | xargs cat  >> app/assets/view
echo "</body></html>" >> app/assets/view
mv app/assets/view app/assets/view.html
