---
name: 2. AsyncTask Loader
menu: 7. Concurrent Tasks
---

# Description

In this example, we use a loader to perform a task in the background.

## Code

### MainActivity.java

```java
public class MainActivity extends AppCompatActivity implements LoaderManager.LoaderCallbacks<String> {

    TextView output;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        output = (TextView) findViewById(R.id.output);
    }

    public void runClickHandler(View view) {
        getSupportLoaderManager().initLoader(0, null, this).forceLoad();
    }

    public void clearClickHandler(View view) {
        output.setText("");
    }

    @NonNull
    @Override
    public Loader<String> onCreateLoader(int i, @Nullable Bundle bundle) {
        return new MyTaskLoader(this);
    }

    @Override
    public void onLoadFinished(@NonNull Loader<String> loader, String o) {
        output.append("Loader finished, returned: " + o + "\n");
    }

    @Override
    public void onLoaderReset(@NonNull Loader<String> loader) {}

    private static class MyTaskLoader extends AsyncTaskLoader<String> {

        public MyTaskLoader(@NonNull Context context) {
            super(context);
        }

        @Nullable
        @Override
        public String loadInBackground() {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            return "From the loader";
        }
    }
}
```
