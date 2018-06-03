package code.assignment.dailydiary;

import code.assignment.dailydiary.model.DiaryPage;
import code.assignment.dailydiary.model.PageDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class DailyDiaryEndpoint {

    @RequestMapping(value = "pages/", method = RequestMethod.POST)
    public ResponseEntity savePage() throws Exception{
        Date today = new Date();
        String formattedDate = "2018-05-01"; // format todays date to given format
        // @ToDo Save body content to a file  {date}.txt
        return ResponseEntity.created(new URI(formattedDate)).build();
    }

    @RequestMapping(value = "pages/{date}", method = RequestMethod.POST)
    public ResponseEntity savePage(String date) throws Exception{
        // @ToDo Save body content to a file  {date}.txt
        return ResponseEntity.created(new URI(date)).build();
    }

    @RequestMapping(value = "pages/today", method = RequestMethod.GET)
    public DiaryPage getTodaysPage(String date) throws Exception{
       //@ToDo get todays page by providing proper formatted date
        return getPage("todaysFormattedDate");
    }
    @RequestMapping(value = "pages/{date}", method = RequestMethod.GET)
    public DiaryPage getPage(String date) throws Exception{

        // @ToDo Read content from {date}.txt for example  2018-01-31.txt
        // @ToDo First line will be title of the page
        String title = "Title of the page";

        // @ToDo read remaining content of the file
        String content = "this will be the remaining content of the file";
        DiaryPage diaryPage = new DiaryPage();
        diaryPage.setTitle(title);
        diaryPage.setContent(content);
        Date createdDate = new Date(); // You need to parse date parameter to date object.
        diaryPage.setDateCreated(createdDate);
        return diaryPage;
    }

    @RequestMapping(value="pages",  method = RequestMethod.GET)
    public List<PageDetail> getPageList() {
        List<PageDetail> pageList = new ArrayList<>();

        //@ToDo read the directory where all pages are stored. Extract title and date information to populate pageList

        pageList.add(new PageDetail("This will be first line of each file", new Date())); // Date will be parsed from filename.

        return pageList;
    }

    @RequestMapping(value="pages", params = {"search"}, method = RequestMethod.GET)
    public List<PageDetail> search(@RequestParam("search") String keyword) {
        List<PageDetail> pageList = new ArrayList<>();

        //@ToDo search all files and return only title and date of relevant page

        pageList.add(new PageDetail("This will be first line of each file that contains search term", new Date())); // Date will be parsed from filename.

        return pageList;
    }
}
