---
name: 7. ViewPager
menu: 4. Fragments
---

# Description

In this example, we can see how to create a viewpager.

## Code

### MainActivity.java

```java
public class MainActivity extends AppCompatActivity {

    private final List<Product> products = DataProvider.productList;
    private final int numPages = products.size();

    private ViewPager mPager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mPager = (ViewPager) findViewById(R.id.pager);
        PagerAdapter pagerAdapter = new ViewPagerAdapter(getSupportFragmentManager());
        mPager.setAdapter(pagerAdapter);
    }

    private class ViewPagerAdapter extends FragmentStatePagerAdapter {

        public ViewPagerAdapter(FragmentManager fm) {
            super(fm);
        }

        @Override
        public Fragment getItem(int position) {
            return ItemFragment.newInstance(products.get(position));
        }

        @Override
        public int getCount() {
            return numPages;
        }
    }

    @Override
    public void onBackPressed() {
        if (mPager.getCurrentItem() == 0) {
            super.onBackPressed();
        } else {
            mPager.setCurrentItem(mPager.getCurrentItem() - 1);
        }
    }
}
```

### ItemFragment.java

```java
public class ItemFragment extends Fragment {

    private Product mProduct;
    private static final String PRODUCT_KEY = "product_key";

    public static ItemFragment newInstance(Product product) {

        Bundle args = new Bundle();
        args.putParcelable(PRODUCT_KEY, product);

        ItemFragment fragment = new ItemFragment();
        fragment.setArguments(args);
        return fragment;
    }

    public ItemFragment() {
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        ViewGroup rootView = (ViewGroup) inflater
                .inflate(R.layout.fragment_detail, container, false);

        Bundle args = getArguments();
        if (args == null) throw new AssertionError();

        mProduct = args.getParcelable(PRODUCT_KEY);
        if (mProduct == null) throw new AssertionError();

        // Display data.
        TextView nameText = (TextView) rootView.findViewById(R.id.nameText);
        nameText.setText(mProduct.getName());

        TextView descriptionText = (TextView) rootView.findViewById(R.id.descriptionText);
        descriptionText.setText(mProduct.getDescription());

        NumberFormat formatter = NumberFormat.getCurrencyInstance();
        String price = formatter.format(mProduct.getPrice());
        TextView priceText = (TextView) rootView.findViewById(R.id.priceText);
        priceText.setText(price);

        String productId = mProduct.getProductId();
        int imageResource = getActivity().getResources()
                .getIdentifier(productId, "drawable", getActivity().getPackageName());
        ImageView iv = (ImageView) rootView.findViewById(R.id.imageView);
        iv.setImageResource(imageResource);

        return rootView;
    }
}
```
