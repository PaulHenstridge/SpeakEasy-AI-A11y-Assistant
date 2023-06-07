package com.codeclan.student.speakeasyDB.controllers;

import com.codeclan.student.speakeasyDB.models.Memo;
import com.codeclan.student.speakeasyDB.repositories.MemoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MemoController {

    @Autowired
    MemoRepository memoRepository;

    @GetMapping(value = "/memos")
    public ResponseEntity<List<Memo>> getAllMemos(){
        return new ResponseEntity(memoRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/memos")
    public ResponseEntity<Memo> postMemo(@RequestBody Memo memo){
        memoRepository.save(memo);
        return new ResponseEntity<>(memo, HttpStatus.CREATED);
    }

    @DeleteMapping(value="/memos/{id}")
    public ResponseEntity<Long> deleteMemo(@PathVariable Long id){
        memoRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

}
