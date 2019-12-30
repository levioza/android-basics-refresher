---
name: 1. AsyncTask
menu: 7. Concurrent Tasks
---

# Description

In this example, we use an async task to perform a task in the background. Here, append a string to a textview every second.

## Code

### MainActivity.java

```java
public class MainActivity extends AppCompatActivity {

    TextView output;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        output = (TextView) findViewById(R.id.output);
    }

    public void runClickHandler(View view) {
        MyAsyncTask task = new MyAsyncTask();
        task.execute("string 1", "string 2", "string 3");
    }

    public void clearClickHandler(View view) {
        output.setText("");
    }

    private class MyAsyncTask extends AsyncTask<String, String, Void> {

        @Override
        protected Void doInBackground(String... strings) {
            for (String string: strings) {
                publishProgress(string);
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            return null;
        }

        @Override
        protected void onProgressUpdate(String... values) {
            super.onProgressUpdate(values);
            output.append(values[0] + "\n");
        }

        @Override
        protected void onPreExecute() {
            super.onPreExecute();
        }

        @Override
        protected void onPostExecute(Void aVoid) {
            super.onPostExecute(aVoid);
        }
    }
}
```
