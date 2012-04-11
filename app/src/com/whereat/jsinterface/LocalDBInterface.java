package com.whereat.jsinterface;

import android.content.Context;
import android.content.SharedPreferences;

/**
 * Provides an interface between the DB and the Android App.
 * @author ntkachov
 *
 */
public class LocalDBInterface {

	 public static final String PREFS_NAME = "JSPrefs";
	 private SharedPreferences settings;
	 
	 public LocalDBInterface(Context context){
		 settings = context.getSharedPreferences(PREFS_NAME, 0);
	 }
	 
	 /**
	  * Set up an interface to read from the DB
	  * @param pref The Preference that we want to get from the phones DB
	  * @return the result as a string.
	  */
	 public String getPref(String pref){
		 return settings.getString(pref, "NONE");
	 }
	 
	 /**
	  * Sets up an interface to write to the DB
	  * @param pref the Preference that we want to set
	  * @param data the data that we want to store in the pref.
	  */
	 public void putPref(String pref, String data){
		 settings.edit().putString(pref, data).commit();
		 
	 }
}
