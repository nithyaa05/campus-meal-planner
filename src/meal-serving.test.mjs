import assert from 'node:assert/strict';
import {test} from 'node:test';
import {mealCardServingText} from './meal-card.mjs';
test('labels API serving counts and defaults legacy meals to one serving',()=>{
  assert.equal(mealCardServingText({}), 'Serves 1');
  assert.equal(mealCardServingText({servingCount:3}), 'Serves 3');
});
test('rejects invalid API serving counts',()=>{
  for(const servingCount of [0,-1,1.5,'2',null])assert.throws(()=>mealCardServingText({servingCount}),TypeError);
});

test('exposes the backend serving count in meal card view data',async()=>{
  const {mealCardView}=await import('./meal-card.mjs');
  assert.deepEqual(mealCardView({name:'Rice bowl',servingCount:3,allergens:[]}),{
    title:'Rice bowl',allergenText:'No allergens listed',servingText:'Serves 3',
  });
});
