package com.codeclan.student.speakeasyDB.models;

import javax.persistence.*;

@Entity
@Table(name = "Memos")
public class Memo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "date")
    private String date;
    @Column(name = "memo_text")
    private String memo_text;

    public Memo(String date, String memo_text){
        this.date = date;
        this. memo_text = memo_text;
    }

    public Memo(){};

    public Long getId() {
        return id;
    }

    public String getDate() {
        return date;
    }

    public String getMemo_text() {
        return memo_text;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setMemo_text(String memoText) {
        this.memo_text = memoText;
    }


}
