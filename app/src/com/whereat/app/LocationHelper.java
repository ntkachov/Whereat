package com.whereat.app;

import java.util.ArrayList;
import java.util.List;

import android.content.Context;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Bundle;

/**
 * Helper class for listening for location updates.
 * 
 * Usage:
 * LocationHelper helper = new LocationHelper(Context);
 * helper.registerForUpdates(LocationUpdateListener);
 */
public class LocationHelper {

	private Context context;

	public LocationHelper(Context context) {
		this.context = context.getApplicationContext();
		getLocationUpdates();
	}

	private List<LocationUpdateListener> listeners = new ArrayList<LocationUpdateListener>();

	public interface LocationUpdateListener {
		public void onLocationUpdate(Location location);
	}

	public void registerForUpdates(LocationUpdateListener listener) {
		listeners.add(listener);
	}

	private void getLocationUpdates() {
		// Acquire a reference to the system Location Manager
		LocationManager locationManager = (LocationManager) context
				.getSystemService(Context.LOCATION_SERVICE);

		// Define a listener that responds to location updates
		LocationListener locationListener = new LocationListener() {
			public void onLocationChanged(Location location) {
				// Called when a new location is found by the network location
				// provider.
				for (LocationUpdateListener listener : listeners) {
					listener.onLocationUpdate(location);
				}
			}

			public void onStatusChanged(String provider, int status,
					Bundle extras) {
			}

			public void onProviderEnabled(String provider) {
			}

			public void onProviderDisabled(String provider) {
			}
		};

		// Register the listener with the Location Manager to receive location
		// updates
		locationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 0,
				0, locationListener);
	}
}
