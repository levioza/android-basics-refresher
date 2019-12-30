---
name: 6. Custom Dialog
menu: 4. Fragments
---

# Description

In this example, we can see how to create a custom dialog inside a fragment.

## Code

### MainActivity.java

```java
public class MainActivity extends AppCompatActivity implements DataEntryDialog.DataEntryListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        if (fab == null) throw new AssertionError();
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                showDialog();
            }
        });
    }

    private void showDialog() {
        Person p = new Person();
        p.setFirstName("Fadi");
        p.setLastName("William");
        p.setAge(26);

        DataEntryDialog dialog = DataEntryDialog.newInstance(p);
        dialog.show(getSupportFragmentManager(), "DIALOG_FRAGMENT");
    }

    @Override
    public void onDataEntryComplete(Person p) {
        Toast.makeText(MainActivity.this,
                "You entered " + p.getFirstName() + " " + p.getLastName(),
                Toast.LENGTH_SHORT).show();
    }
}
```

### SimpleFragment.java

```java
public class SimpleFragment extends Fragment {

    public SimpleFragment() {
        // Required empty public constructor.
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        // Inflate the layout for this fragment.
        return inflater.inflate(R.layout.fragment_simple, container, false);
    }
}
```

### MainActivityFragment.java

```java
public class MainActivityFragment extends Fragment {

    public MainActivityFragment() {
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_main, container, false);
    }
}
```

### DataEntryDialog.java

```java
public class DataEntryDialog extends DialogFragment {

    public static final String PERSON_KEY = "PERSON_KEY";
    EditText etFirstName, etLastName, etAge;
    private DataEntryListener mListener;

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        mListener = (DataEntryListener) getActivity();
    }

    public static DataEntryDialog newInstance(Person person) {
        Bundle args = new Bundle();
        args.putParcelable("PERSON_KEY", person);

        DataEntryDialog fragment = new DataEntryDialog();
        fragment.setArguments(args);
        return fragment;
    }

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, Bundle savedInstanceState) {
        View rootView = inflater.inflate(R.layout.data_entry_dialog, container, false);

        etFirstName = (EditText) rootView.findViewById(R.id.textFirstName);
        etLastName = (EditText) rootView.findViewById(R.id.textLastName);
        etAge = (EditText) rootView.findViewById(R.id.textAge);

        Person person = getArguments().getParcelable(PERSON_KEY);

        etFirstName.setText(person.getFirstName());
        etLastName.setText(person.getLastName());
        etAge.setText(String.valueOf(person.getAge()));

        Button btnOk = rootView.findViewById(R.id.btnOk);
        btnOk.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                saveData();
            }
        });

        Button btnCancel = (Button) rootView.findViewById(R.id.btnCancel);
        btnCancel.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dismiss();
            }
        });

        return rootView;
    }

    private void saveData() {
        Person p = new Person();
        p.setFirstName(etFirstName.getText().toString());
        p.setLastName(etLastName.getText().toString());
        p.setAge(Integer.valueOf(etAge.getText().toString()));

        mListener.onDataEntryComplete(p);
        dismiss();
    }

    public interface DataEntryListener {
        void onDataEntryComplete(Person p);
    }
}
```
