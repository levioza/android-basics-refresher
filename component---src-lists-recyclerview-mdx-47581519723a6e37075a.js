(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{aEIG:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return c}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var i=n("/FXl"),a=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/lists/recyclerview.mdx"}});var m={_frontmatter:o},l=a.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(i.b)(l,r({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"description"},"Description"),Object(i.b)("p",null,"In this example, you will find the code that could help you implement a recyclerview based on a layout that you coded yourself. We simply get the data from a SampleDataProvider and then we sort the data provided and display it in the recyclerView using a custom adapter that implements the viewholder pattern."),Object(i.b)("h2",{id:"code"},"Code"),Object(i.b)("h3",{id:"mainactivityjava"},"MainActivity.java"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-java"}),'public class MainActivity extends AppCompatActivity {\n\n    @SuppressWarnings("FieldCanBeLocal")\n    List<DataItem> dataItemList = SampleDataProvider.dataItemList;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        setContentView(R.layout.activity_main);\n\n        Collections.sort(dataItemList, new Comparator<DataItem>() {\n            @Override\n            public int compare(DataItem item, DataItem t1) {\n                return item.getItemName().compareTo(t1.getItemName());\n            }\n        });\n\n        DataItemAdapter adapter = new DataItemAdapter(this, dataItemList);\n\n        RecyclerView recyclerView = (RecyclerView) findViewById(R.id.rvItems);\n        recyclerView.setAdapter(adapter);\n    }\n}\n')),Object(i.b)("h3",{id:"dataitemadapterjava"},"DataItemAdapter.java"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-java"}),'public class DataItemAdapter extends RecyclerView.Adapter<DataItemAdapter.ViewHolder> {\n\n    public static final String ITEM_KEY = "ITEM_KEY";\n    private List<DataItem> mItems;\n    private Context mContext;\n\n    public DataItemAdapter(Context context, List<DataItem> items) {\n\n        this.mContext = context;\n        this.mItems = items;\n    }\n\n    @Override\n    public DataItemAdapter.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {\n        LayoutInflater inflater = LayoutInflater.from(mContext);\n        View itemView = inflater.inflate(R.layout.list_item, parent, false);\n        ViewHolder viewHolder = new ViewHolder(itemView);\n        return viewHolder;\n    }\n\n    @Override\n    public void onBindViewHolder(DataItemAdapter.ViewHolder holder, int position) {\n        final DataItem item = mItems.get(position);\n\n        try {\n            holder.tvName.setText(item.getItemName());\n            String imageFile = item.getImage();\n            InputStream inputStream = mContext.getAssets().open(imageFile);\n            Drawable d = Drawable.createFromStream(inputStream, null);\n            holder.imageView.setImageDrawable(d);\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n\n        holder.mView.setOnClickListener(new View.OnClickListener() {\n            @Override\n            public void onClick(View v) {\n                String itemId = item.getItemId();\n                Intent intent = new Intent(mContext, DetailActivity.class);\n                intent.putExtra(ITEM_KEY, item);\n                mContext.startActivity(intent);\n            }\n        });\n\n        holder.mView.setOnLongClickListener(new View.OnLongClickListener() {\n            @Override\n            public boolean onLongClick(View v) {\n                Toast.makeText(mContext, "You longed clicked " + item.getItemName(), Toast.LENGTH_SHORT).show();\n                return false;\n            }\n        });\n    }\n\n    @Override\n    public int getItemCount() {\n        return mItems.size();\n    }\n\n    public static class ViewHolder extends RecyclerView.ViewHolder {\n\n        public TextView tvName;\n        public ImageView imageView;\n        public View mView;\n\n        public ViewHolder(View itemView) {\n            super(itemView);\n\n            tvName = (TextView) itemView.findViewById(R.id.itemNameText);\n            imageView = (ImageView) itemView.findViewById(R.id.imageView);\n            mView = itemView;\n        }\n    }\n}\n')))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/lists/recyclerview.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-lists-recyclerview-mdx-47581519723a6e37075a.js.map