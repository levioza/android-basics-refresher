---
name: 3. Pass Data to Fragment
menu: 4. Fragments
---

# Description

In this example, we can see how to pass data from an activity to a fragment.

## Code

### MainActivity.java

```java
public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void clickHandler(View view) {
        Bundle arguments = new Bundle();
        arguments.putString(SimpleFragment.MESSAGE_KEY, "Passed as an argument");

        SimpleFragment fragment = new SimpleFragment();
        fragment.setArguments(arguments);
        getSupportFragmentManager()
                .beginTransaction()
                .add(R.id.fragment_container, fragment)
                .commit();
    }
}
```

### SimpleFragment.java

```java
public class SimpleFragment extends Fragment {

    public static final String MESSAGE_KEY = "message_key";

    public SimpleFragment() {
        // Required empty public constructor
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment.
        View view = inflater.inflate(R.layout.fragment_simple, container, false);

        Bundle arguments = getArguments();
        if (arguments != null) {
            String message = arguments.getString(MESSAGE_KEY);
            TextView tvMessage = (TextView) view.findViewById(R.id.message);
            tvMessage.setText(message);
        }

        return view;
    }
}
```
