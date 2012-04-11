package com.whereat.app;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import com.whereat.jsinterface.LocalDBInterface;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.webkit.WebChromeClient;
import android.webkit.WebView;

public class WhereatActivity extends Activity {

	WebView mWebView; //This is all we need for this activity
	
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.main); //We wont need any more views because our entire navigation is in html and js.

		//Setup WebView
		mWebView = (WebView) findViewById(R.id.webview);
		mWebView.getSettings().setJavaScriptEnabled(true);
		
		
		//Add any JS interfaces that we need like the DB
		mWebView.addJavascriptInterface(new LocalDBInterface(this), "WhereatDB");
		
		//Load the URL from the assets folder.
		mWebView.loadUrl("file:///android_asset/view.html");
		
		//Set up Error Logging.
		mWebView.setWebChromeClient(new WebChromeClient(){
			public void onConsoleMessage(String message, int lineNumber, String sourceID){
				Log.d("Whereat",message + " -- LINE: " + lineNumber + " : " + sourceID);
			}
		});
	}

}
