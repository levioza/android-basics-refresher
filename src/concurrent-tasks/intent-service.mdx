---
name: 3. IntentService
menu: 7. Concurrent Tasks
---

# Description

In this example, we use an intent service to perform a task in the background.

## Code

### MainActivity.java

```java
public class MainActivity extends AppCompatActivity {

    private static final String JSON_URL =
            "https://jsonplaceholder.typicode.com/users";
    TextView output;

    private BroadcastReceiver mBroadcastReceiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            String message = intent.getStringExtra(MyService.MY_SERVICE_PAYLOAD);
            output.append(message + "\n");
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        output = (TextView) findViewById(R.id.output);

        LocalBroadcastManager.getInstance(getApplicationContext()).registerReceiver(mBroadcastReceiver, new IntentFilter(MyService.My_SERVICE_MESSAGE));
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        LocalBroadcastManager.getInstance(getApplicationContext()).unregisterReceiver(mBroadcastReceiver);
    }

    public void runClickHandler(View view) {
        Intent intent = new Intent(this, MyService.class);
        intent.setData(Uri.parse(JSON_URL));
        startService(intent);
    }

    public void clearClickHandler(View view) {
        output.setText("");
    }
}
```

### MyService.java

```java
public class MyService extends IntentService {

    public static final String TAG = "MyService";
    public static final String My_SERVICE_MESSAGE = "myServiceMessage";
    public static final String MY_SERVICE_PAYLOAD = "myServicePayload";

    public MyService() {
        super("MyService");
    }

    @Override
    protected void onHandleIntent(Intent intent) {
        Uri uri = intent.getData();
        Log.i(TAG, "onHandleIntent: " + uri.toString());

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        Intent messageIntent = new Intent(My_SERVICE_MESSAGE);
        messageIntent.putExtra(MY_SERVICE_PAYLOAD, "Service all done!");
        LocalBroadcastManager localBroadcastManager = LocalBroadcastManager.getInstance(getApplicationContext());

        localBroadcastManager.sendBroadcast(messageIntent);
    }

    @Override
    public void onCreate() {
        super.onCreate();
        Log.i(TAG, "onCreate");
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        Log.i(TAG, "onDestroy");
    }
}
```
