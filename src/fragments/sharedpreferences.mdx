---
name: 8. SharedPreferences
menu: 4. Fragments
---

# Description

In this example, we can see how to create a SharedPreferences fragment.

## Code

### preferences.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<PreferenceScreen xmlns:android="http://schemas.android.com/apk/res/android">
    <EditTextPreference
        android:key="username"
        android:summary="Please provide your username"
        android:title="Your Name" />
</PreferenceScreen>
```

### MainActivity.java

```java
public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.main_menu, menu);
        return true;
    }

    public void onSettingsClick(MenuItem item) {
        Intent intent = new Intent(this, MyPreferencesActivity.class);
        startActivity(intent);
    }

    public void onTestPrefClick(MenuItem item) {

        SharedPreferences preferences = PreferenceManager.getDefaultSharedPreferences(this);
        String userName = preferences.getString("username", "not defined");

        Toast.makeText(MainActivity.this, "User name: " + userName,
                Toast.LENGTH_SHORT).show();
    }
}
```

### MyPreferencesActivity.java

```java
public class MyPreferencesActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        getFragmentManager()
                .beginTransaction()
                .replace(android.R.id.content,
                        new MyPreferenceFragment())
                .commit();
    }

    public static class MyPreferenceFragment extends PreferenceFragment {
        @Override
        public void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            addPreferencesFromResource(R.xml.preferences);
        }
    }
}
```
