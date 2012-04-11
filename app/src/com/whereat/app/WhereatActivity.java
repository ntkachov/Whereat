package com.whereat.app;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebView;

public class WhereatActivity extends Activity {

	WebView mWebView;

	/** Called when the activity is first created. */
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.main);

		//String HTML = readHtml();
		
		mWebView = (WebView) findViewById(R.id.webview);
		mWebView.getSettings().setJavaScriptEnabled(true);
		//mWebView.loadData(HTML, "text/html", null);
		mWebView.loadUrl("file:///android_asset/view.html");
	}

	private String readHtml() {
		try {
			String html = "";
			BufferedReader htmlReader = new BufferedReader(
					new InputStreamReader(getAssets().open("view.html")));
			String line = "";

			while ((line = htmlReader.readLine()) != null) {
				html += line;
			}
			return html;
		} catch (IOException e) {
			return "Could Not read File. Please reinstall App";
		}
	}
}
