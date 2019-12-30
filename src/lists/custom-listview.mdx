---
name: 2. Custom ListView
menu: 2. Lists
---

# Description

In this example, you will find the code that could help you implement a custom listview based on a layout that you coded yourself. We simply get the data from a SampleDataProvider and then we sort the data provided and display it in the custom listview using a custom array adapter.

## Code

### MainActivity.java

```java
public class MainActivity extends AppCompatActivity {

    List<DataItem> dataItemList = SampleDataProvider.dataItemList;
    List<String> itemNames = new ArrayList<>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Collections.sort(dataItemList, new Comparator<DataItem>() {
            @Override
            public int compare(DataItem o1, DataItem o2) {
                return o1.getItemName().compareTo(o2.getItemName());
            }
        });

        DataItemAdapter adapter = new DataItemAdapter(this, dataItemList);

        ListView listView = (ListView) findViewById(android.R.id.list);
        listView.setAdapter(adapter);
    }
}
```

### DataItemAdapter.java

```java
public class DataItemAdapter extends ArrayAdapter<DataItem> {

    List<DataItem> mDataItems;
    LayoutInflater mInflater;

    public DataItemAdapter(Context context, List<DataItem> objects) {
        super(context, R.layout.list_item, objects);

        mDataItems = objects;
        mInflater = LayoutInflater.from(context);
    }

    @NonNull
    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        // This is important to prevent re-initializing the cell in case it has
        // been already inflated.
        if (convertView == null) {
            convertView = mInflater.inflate(R.layout.list_item, parent, false);
        }

        TextView tvName = (TextView) convertView.findViewById(R.id.itemNameText);
        ImageView imageView = (ImageView) convertView.findViewById(R.id.imageView);

        DataItem item = mDataItems.get(position);

        tvName.setText(item.getItemName());
        imageView.setImageResource(R.drawable.apple_pie);

        return convertView;
    }
}
```
