/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {absoluteFrom as _} from '../../src/ngtsc/file_system';
import {runInEachFileSystem} from '../../src/ngtsc/file_system/testing';
import {loadStandardTestFiles} from '../../src/ngtsc/testing';

import {NgtscTestEnvironment} from './env';

const testFiles = loadStandardTestFiles();

runInEachFileSystem(() => {
  describe('ngtsc incremental compilation (semantic changes)', () => {
    let env!: NgtscTestEnvironment;

    beforeEach(() => {
      env = NgtscTestEnvironment.setup(testFiles);
      env.enableMultipleCompilations();
      env.tsconfig();
    });

    function expectToHaveWritten(files: string[]): void {
      const set = env.getFilesWrittenSinceLastFlush();

      const expectedSet = new Set<string>();
      for (const file of files) {
        expectedSet.add(file);
        expectedSet.add(file.replace(/\.js$/, '.d.ts'));
      }

      expect(set).toEqual(expectedSet);

      // Reset for the next compilation.
      env.flushWrittenFileTracking();
    }

    describe('changes to public api', () => {
      it('should not recompile dependent components when public api is unchanged',
         () => {

         });

      it('should not recompile components that do not use a changed directive',
         () => {

         });

      it('should recompile components for which a directive usage is introduced',
         () => {

         });

      it('should recompile components for which a directive usage is removed',
         () => {

         });

      it('should recompile dependent components when an input is added',
         () => {

         });

      it('should recompile dependent components when an input is renamed',
         () => {

         });

      it('should recompile dependent components when an input is removed',
         () => {

         });

      it('should recompile dependent components when an output is added',
         () => {

         });

      it('should recompile dependent components when an output is renamed',
         () => {

         });

      it('should recompile dependent components when an output is removed',
         () => {

         });

      it('should recompile dependent components when exportAs clause changes',
         () => {

         });

      it('should recompile components when a pipe is newly matched because it was renamed',
         () => {

         });

      it('should recompile components when a pipe no longer matches because it was renamed',
         () => {

         });
    });

    describe('external declarations', () => {
      it('should not recompile components that use external declarations that are not changed',
         () => {

         });

      it('should recompile components once an external declaration is changed',
         () => {

         });
    });

    describe('symbol identity', () => {
      it('should recompile components that use a directive declared inside a function',
         () => {

         });

      it('should recompile components when their exported name changes',
         () => {

         });

      it('should not recompile components when a directive is changed into a component',
         () => {

         });

      it('should recompile components when a directive is changed into a pipe',
         () => {

         });

      it('should recompile components when a directive is changed into an NgModule',
         () => {

         });

      it('should not recompile components when a component is changed into a directive',
         () => {

         });

      it('should recompile components when a component is changed into a pipe',
         () => {

         });

      it('should recompile components when a component is changed into an NgModule',
         () => {

         });

      it('should recompile components when a pipe is changed into a directive',
         () => {

         });

      it('should recompile components when a pipe is changed into a component',
         () => {

         });

      it('should recompile components when a pipe is changed into an NgModule',
         () => {

         });
    });

    describe('remote scoping', () => {
      it('should not recompile an NgModule nor component when remote scoping is unaffected',
         () => {

         });

      it('should recompile an NgModule and component when an import cycle is introduced',
         () => {

         });

      it('should recompile an NgModule and component when an import cycle is removed',
         () => {

         });
    });

    describe('NgModule declarations', () => {
      it('should recompile components when a matching directive is added in the direct scope',
         () => {

         });

      it('should recompile components when a matching directive is removed from the direct scope',
         () => {

         });

      it('should recompile components when a matching directive is added in the transitive scope',
         () => {

         });

      it('should recompile components when a matching directive is removed from the transitive scope',
         () => {

         });

      it('should not recompile components when a mismatched directive is added in scope',
         () => {

         });

      it('should not recompile components when a matching directive is added outside scope',
         () => {

         });
    });

    describe(
        'error recovery',
        () => {
            // ...
        });
  });
});
