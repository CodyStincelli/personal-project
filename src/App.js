import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import BaseCharacter from'./Component/OptionLine'

class App extends Component {
  constructor() {
    super();

    this.state = {
      inputName: '',
      inputClass: '',
      inputRace: '',
      selectedStr:0,
      selectedDex:0,
      selectedCon:0,
      selectedInt:0,
      selectedWis:0,
      selectedChar:0,
      Strength:0,
      Dexterity:0,
      Constitution:0,
      Intelligence:0,
      Wisdom:0,
      Charisma:0,
      randomStats: [],
      currentCharacter: {},
      }
    }
    handleNameChange (value) {
      this.setState({
        inputName: value
      })
  }
    handleRaceChange (value) {
      this.setState({
        inputRace: value
      })
      
  }
    handleClassChange (value) {
      this.setState({
        inputClass: value
      })
  }
    statGenerator() {
      var completeStats=[];
      var stats=[];
      var stat=[];
      var statTotal=0;
      for(let i = 0; i < 6; i++){
        for(let x = 0; x < 4; x++){
            stat.push(Math.floor(Math.random() * (7 - 1)) + 1)
        }
        for (let y = 0; y < 4; y++){
          if (stat[y] > stat[0] || stat[y] > stat[1] || stat[y] > stat[2] || stat[y] > stat[3]){
            stats.push(stat[y])
          }
          else{stat[y] = 0}
        }
        for(let z = 0; z < 3; z++){
          statTotal += stats[z];
        }
        completeStats.push(statTotal)
        statTotal = 0;
        stat =[];
        stats =[];
    }
    return completeStats;
  }
  handleStrChange(value){
    let reset = this.state.selectedStr.slice(0)
    let fix = reset * 1
    if (this.state.inputRace === 'Dragonborn'){
      let dragon = fix + 2
      this.setState({selectedStr:dragon})
    }
    else if (this.state.inputRace === 'Half-Orc'){
      let orc = fix + 2
      this.setState({selectedStr:orc})
    }
    else if (this.state.inputRace === 'Human'){
      let human = fix + 1
      this.setState({selectedStr:human})
    }
    else{
    this.setState({selectedStr:value})
    }
  }
  handleDexChange(value){
    let reset = this.state.selectedDex.slice(0)
    let fix = reset * 1
    if (this.state.inputRace === "Elf" || this.state.inputRace === 'Halfling'){
      let fast = fix + 2
      this.setState({selectedDex:fast})
    }
    else if (this.state.inputRace === 'Human'){
      let human = fix + 1
      this.setState({selectedDex:human})
    }
    else{this.setState({selectedDex:value})}
  }
  handleConChange(value){
    let reset = this.state.selectedCon.slice(0)
    let fix = reset * 1
    if (this.state.inputRace === 'Dwarf'){
      let dwarf = fix + 2
      this.setState({selectedCon:dwarf})
    }
    else if(this.state.inputRace === 'Human' || this.state.inputRace === 'Half-Orc'){
      let human = fix + 1
      this.setState({selectedCon:human})
    }
    else{this.setState({selectedCon:value})}
  }
  handleIntChange(value){
    let reset = this.state.selectedInt.slice(0)
    let fix = reset * 1
    if (this.state.inputRace === 'Gnome'){
      let gnome = fix + 2
      this.setState({selectedInt:gnome})
    }
    else if (this.state.inputRace === 'Human' || this.state.inputRace === 'Tiefling'){
      let human = fix + 1
      this.setState({selectedInt:human})
    }
    else{this.setState({selectedInt:value})}
  }
  handleWisChange(value){
    let reset = this.state.selectedWis.slice(0)
    let fix = reset * 1
    if(this.state.inputRace === 'Human'){
      let human = fix + 1
      this.setState({selectedWis:human})
    }
    else{this.setState({selectedWis:value})}
  }
  handleCharChange(value){
    let reset = this.state.selectedChar.slice(0)
    let fix = reset * 1
    if (this.state.inputRace === "Half-Elf" || this.state.inputRace === 'Tiefling'){
      let good = fix + 2
      this.setState({selectedChar:good})
    }
    else if (this.state.inputRace === 'Human' || this.state.inputRace === 'Dragonborn'){
      let human = fix + 1
      this.setState({selectedChar:human})
    }
    else{this.setState({selectedChar:value})}
  }
  handleStrButton(){
    console.log('Pressed!')
if (this.state.Strength === 0){
    let cpyAry = this.state.randomStats.slice(0);
    let index = cpyAry.indexOf(this.state.selectedStr*1);
    cpyAry.splice(index, 1);
    
    this.setState({
      Strength:this.state.selectedStr,
      randomStats:cpyAry
    })}
    console.log( this.state.Strength )
  }
  handleDexButton(){
    console.log('Pressed!')
    if(this.state.Dexterity === 0){
    let cpyAry = this.state.randomStats.slice(0);
    let index = cpyAry.indexOf(this.state.selectedDex*1);
    cpyAry.splice(index, 1);
    
    this.setState({
      Dexterity:this.state.selectedDex,
      randomStats:cpyAry
  })}
  console.log(this.state.Dexterity)
}
  handleConButton(){
    console.log('Pressed!')
    if(this.state.Constitution === 0){
    let cpyAry = this.state.randomStats.slice(0);
    let index = cpyAry.indexOf(this.state.selectedCon*1);
    cpyAry.splice(index, 1);
    
    this.setState({
      Constitution:this.state.selectedCon,
      randomStats:cpyAry
  })}
  console.log(this.state.Constitution)
}
  handleIntButton(){
    console.log('Pressed!')
    if(this.state.Intelligence === 0){
    let cpyAry = this.state.randomStats.slice(0);
    let index = cpyAry.indexOf(this.state.selectedInt*1);
    cpyAry.splice(index, 1);
    
    this.setState({
      Intelligence:this.state.selectedInt,
      randomStats:cpyAry
  })}
  console.log(this.state.Intelligence)
}
  handleWisButton(){
    console.log('Pressed!')
    if(this.state.Wisdom === 0){
    let cpyAry = this.state.randomStats.slice(0);
    let index = cpyAry.indexOf(this.state.selectedWis*1);
    cpyAry.splice(index, 1);
    
    this.setState({
      Wisdom:this.state.selectedWis,
      randomStats:cpyAry
  })}
  console.log(this.state.Wisdom)
}
  handleCharButton(){
    console.log('Pressed!')
    if(this.state.Charisma === 0){
    let cpyAry = this.state.randomStats.slice(0);
    let index = cpyAry.indexOf(this.state.selectedChar*1);
    cpyAry.splice(index, 1);
    
    this.setState({
      Charisma:this.state.selectedChar,
      randomStats:cpyAry
  })}
  console.log(this.state.Charisma)
}

  render(){
    console.log(this.state.currentCharacter)
    console.log(this.state.randomStats)
    var statStrSelect = <div>
      <select onChange={e => this.handleStrChange(e.target.value)}>Stats
        <option selected disabled>Stats</option>
        <option>{this.state.randomStats[0]}</option>
        <option>{this.state.randomStats[1]}</option>
        <option>{this.state.randomStats[2]}</option>
        <option>{this.state.randomStats[3]}</option>
        <option>{this.state.randomStats[4]}</option>
        <option>{this.state.randomStats[5]}</option>
      </select>
      <button onClick={ () => this.handleStrButton()}>Set Stat</button>
      </div>
        var statDexSelect = <div>
        <select onChange={e => this.handleDexChange(e.target.value)}>
          <option  selected disabled hidden>Stats</option>
          <option>{this.state.randomStats[0]}</option>
          <option>{this.state.randomStats[1]}</option>
          <option>{this.state.randomStats[2]}</option>
          <option>{this.state.randomStats[3]}</option>
          <option>{this.state.randomStats[4]}</option>
          <option>{this.state.randomStats[5]}</option>
        </select>
        <button onClick={ () => this.handleDexButton()}>Set Stat</button>
        </div>
            var statConSelect = <div>
            <select onChange={e => this.handleConChange(e.target.value)}>
              <option selected disabled hidden>Stats</option>
              <option>{this.state.randomStats[0]}</option>
              <option>{this.state.randomStats[1]}</option>
              <option>{this.state.randomStats[2]}</option>
              <option>{this.state.randomStats[3]}</option>
              <option>{this.state.randomStats[4]}</option>
              <option>{this.state.randomStats[5]}</option>
            </select>
            <button onClick={ () => this.handleConButton()}>Set Stat</button>
            </div>
                var statIntSelect = <div>
                <select onChange={e => this.handleIntChange(e.target.value)}>
                  <option  selected disabled hidden>Stats</option>
                  <option>{this.state.randomStats[0]}</option>
                  <option>{this.state.randomStats[1]}</option>
                  <option>{this.state.randomStats[2]}</option>
                  <option>{this.state.randomStats[3]}</option>
                  <option>{this.state.randomStats[4]}</option>
                  <option>{this.state.randomStats[5]}</option>
                </select>
                <button onClick={ () => this.handleIntButton()}>Set Stat</button>
                </div>
                    var statWisSelect = <div>
                    <select onChange={e => this.handleWisChange(e.target.value)}>
                      <option selected disabled hidden>Stats</option>
                      <option>{this.state.randomStats[0]}</option>
                      <option>{this.state.randomStats[1]}</option>
                      <option>{this.state.randomStats[2]}</option>
                      <option>{this.state.randomStats[3]}</option>
                      <option>{this.state.randomStats[4]}</option>
                      <option>{this.state.randomStats[5]}</option>
                    </select>
                    <button onClick={ () => this.handleWisButton()}>Set Stat</button>
                    </div>
                        var statCharSelect = <div>
                        <select onChange={e => this.handleCharChange(e.target.value)}>
                          <option selected disabled hidden>Stats</option>
                          <option>{this.state.randomStats[0]}</option>
                          <option>{this.state.randomStats[1]}</option>
                          <option>{this.state.randomStats[2]}</option>
                          <option>{this.state.randomStats[3]}</option>
                          <option>{this.state.randomStats[4]}</option>
                          <option>{this.state.randomStats[5]}</option>
                        </select>
                        <button onClick={ () => this.handleCharButton()}>Set Stat</button>
                        </div>
    return (
        <div>
          <nav className='nav-bar'></nav>
          <section className='current-info'>
                <input onChange={e => this.handleNameChange(e.target.value)} type='text' placeholder='Name' />
                <select onChange={e => this.handleRaceChange(e.target.value)}>
                    <option value="" selected disabled hidden>Race</option>
                    <option value='Dragonborn'>Dragonborn</option>
                    <option value='Dwarf'>Dwarf</option>
                    <option value='Elf'>Elf</option>
                    <option value='Gnome'>Gnome</option>
                    <option value='Half-Elf'>Half-Elf</option>
                    <option value='Half-Orc'>Half-Orc</option>
                    <option value='Halfling'>Halfling</option>
                    <option value='Human'>Human</option>
                    <option value='Tiefling'>Tiefling</option>
                </select>
                <select onChange={e => this.handleClassChange(e.target.value)}>
                    <option value="" selected disabled hidden>Class</option>
                    <option value='Barbarian'>Barbarian</option>
                    <option value='Bard'>Bard</option>
                    <option value='Druid'>Druid</option>
                    <option value='Monk'>Monk</option>
                    <option value='Paladin'>Paladin</option>
                    <option value='Ranger'>Ranger</option>
                    <option value='Sorcerer'>Sorcerer</option>
                    <option value='Warlock'>Warlock</option>
                    <option value='Wizard'>Wizard</option>
                </select>
                <button onClick={ () => this.setState({currentCharacter:{name:this.state.inputName,race:this.state.inputRace,class:this.state.inputClass,stats:this.state.randomStats}})}>Submit</button>
          </section>
          <section className='generate-stats'>
            <button onClick={ () => this.setState({randomStats:this.statGenerator()})}>Generate Stats</button>
          </section>
          <section className='character-display'>
                  <ul>Strength:{statStrSelect}</ul>
                  <ul>Dexterity:{statDexSelect}</ul>
                  <ul>Constitution:{statConSelect}</ul>
                  <ul>Intelligence:{statIntSelect}</ul>
                  <ul>Wisdom:{statWisSelect}</ul>
                  <ul>Charisma:{statCharSelect}</ul>
                  <ul>{this.state.randomStats[0]}</ul>
                  <ul>{this.state.randomStats[1]}</ul>
                  <ul>{this.state.randomStats[2]}</ul>
                  <ul>{this.state.randomStats[3]}</ul>
                  <ul>{this.state.randomStats[4]}</ul>
                  <ul>{this.state.randomStats[5]}</ul>
          </section>
          <section className='character-display'>
          <h1>Current character</h1>
          <ul>Name:{this.state.inputName}</ul>
              <ul>Race:{this.state.inputRace}</ul>
              <ul>Class:{this.state.inputClass}</ul>
            <ul>Stats:<ul>Strength:{this.state.Strength}</ul>
            <ul>Dexterity:{this.state.Dexterity}</ul>
            <ul>Constitution:{this.state.Constitution}</ul>
            <ul>Intelligence:{this.state.Intelligence}</ul>
            <ul>Wisdom:{this.state.Wisdom}</ul>
            <ul>Charisma:{this.state.Charisma}</ul>
            </ul>
            <button>Post</button>
            <button>Edit</button>
            <button>Delete</button>
          </section>
        </div>
      )}}
export default App;



// dwarf 1, elf 2, halfling 3, human 4, dragonborn 5,gnome 6, half-elf 7, half-orc 8, tiefling 9
