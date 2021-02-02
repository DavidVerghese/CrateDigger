# PROJECT ISSUE TICKET

## Unexpected Behavior

In my project, I want to give the user the ability to create a song and a sample, and see the song and sample pair on the 'All Posts' page. First, the website will take the information the user has input about the song and the sample on the 'Add a Post' page (eg the year the song was released, the producer of the sample). 
Then it will create an entry in the song table, and an entry in the sample. 
Third, it will take the ids of the new song and the new sample created, and send then to a joins table (songssamples). 
Fourth, on the 'All Posts' page the website shall find the information about the newly created song and sample pair. Last, it will look the song id and sample id, and render information about both as a single post. 

I was hoping I would be able to use a single 'submit' button to handle everything. Instead, I have found trying to perform multiple, connected functions with one button creates errors. For example, I can't create a song and a sample, and then get their ids in the same step, as the songs and samples haven't been created yet. In order to get everything to work, I now have three buttons. 

I have written about the errors I was getting in more detail on the SongsSamplesCreate page.

## Reproduce the Error


```md
To create a post: 
1. Clone this repo.
2. Run `db:create`
3. Run `rails s`
4. cd in client
5. Run `npm i`
6. Run `npm start`.
7. On the webpage, click on 'Add a Post`
8. Fill out the form. You can use nonsense words (eg, 'qweqere') for all the fields, except for producer_id, which needs to be a number between 1 and 11, inclusive.
To see the error 
1. In the local repo, go to clients/src/screens/SongsSamplesCreate
2. On lines 67-75, 96-105, and 251-252, I wrote out pseudocode explaining what kind of problems I was having
```

To summarize: 
line 66-75... in order to create a new post in the 'joins' table, songssamples, you need to have the id of the song and sample. You can't get this as the song and sample haven't been created yet. 
lines 96-105: same problem. In order to solve this problem, I had to create a button outside of the form (line 244) that would get the ids of the song and sample after they had been created. 
line 251-252: while I was able to get the ids of the song and sample here, I wasn't able to use them to create a new entry in the 'joins' table. I had to use a third button (line 256) for that step


## Attempted Resolution

```md
1. https://www.reddit.com/r/rails/comments/4is37h/help_how_to_save_input_from_a_form_as_a_join/
2. https://stackoverflow.com/questions/34486844/how-do-i-input-join-table-field-in-a-form-in-rails
```