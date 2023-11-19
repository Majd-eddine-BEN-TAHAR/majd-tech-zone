<h1>Blog home page</h1>
<!-- 
    -- every post should be displayed in a card, and each post should have the title and a description and the date and the tags.
    -- you need a way to filter all the posts like using a a json file that contains all the posts names and their paths.
    -- the json file should be generated using prerendring that runs on build time, like using prerender=true on a +server.ts GET route to get all the posts names and their tags and their paths and make them static data so all users get a prerdred get route.
    -- now using the json file you can filter the posts by their tags and their namesn, no need to prerender a specific page for each tag in the blog, just use the prendred json file to show the posts that have the sleceted tag.
    -- you don't need a category page for each category, just use the json file to filter the posts by their category and show them in the current page
    -- in the begining show only the last 15 posts but fetch all the posts from the GET route and store them in a variable, then when the user clicks on the load more button, show the next 15 posts and so on
    -- add a load more button to load more posts from the object that contains all the posts.
    -- add a search bar to search for posts by their name or their tags or both, show all the available tags under the search bar like dev web simplified and when the user clicks on a tag you change the tag color, filter the posts by the tags and the name that the user entered in the search bar.
    -- 
 -->
