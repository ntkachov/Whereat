package com.whereat.app;

import android.app.Activity;
import android.os.Bundle;

public class WhereatActivity extends Activity {

	WebView mWebView;

    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);

	mWebView = (WebView) findViewById(R.id.webview);
	mwebView.loadURL("http://www.thedailynerd.com");
    }
}
